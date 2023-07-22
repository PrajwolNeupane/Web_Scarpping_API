import cherrio from "cheerio";
import request from "request-promise";


export const getAllProducts = async (req, res) => {
    try {
        const response = await request({
            uri: "https://stickersnepal.com/",
            headers: {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-encoding": "gzip, deflate, br",
                "accept-language": "en-US,en;q=0.9"
            },
            gzip: true
        });
        let $ = cherrio.load(response);
        var products = [];
        $('div[class="row"]').children().each((_, element) => {
            const name = $(element).find('h5[class="mb-0 text-sm"] > a').text().trim();
            const price = $(element).find('p[class="small text-muted mb-2"]').text().trim();
            const image = $(element).find('img[class="img-fluid"]').attr('src');
            if (name) {
                products.push({ name: name, price: price, image: `https://stickersnepal.com/${image}` })
            }
        });
        res.send({products });
    } catch (e) {
        res.status(400).send({error:"Error" });
    }
}

export const getAllCategory = async (req, res) => {
    try {
        const response = await request({
            uri: "https://stickersnepal.com/",
            headers: {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-encoding": "gzip, deflate, br",
                "accept-language": "en-US,en;q=0.9"
            },
            gzip: true
        });
        let $ = cherrio.load(response);
        var catgories = [];
        $('div[class="text-center scroll-item"]').children().each((_, element) => {
            const title = $(element).find('span[class="category-item-title"]').text().trim();
            const image = $(element).find('img[class="img-fluid"]').attr('src');
            if (title) {
                catgories.push({ name: title,image: `https://stickersnepal.com/${image}` })
            }
        });
        res.send({catgories});
    } catch (e) {
        console.log(e);
        res.status(400).send({error:"Error" });
    }
}
