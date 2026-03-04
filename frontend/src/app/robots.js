export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/login', '/api'],
            },
        ],
        sitemap: process.env.NODE_ENV === 'production' ? 'https://www.fruupy.com/sitemap.xml' : 'http://localhost:3000/sitemap.xml',
    }
}
