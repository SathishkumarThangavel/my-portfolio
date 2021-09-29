import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {

    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={'https://www.googletagmanager.com/gtag/js?id=UA-183240208-1'}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'UA-183240208-1', {
                                page_path: window.location.pathname,
                                });
                            `,
                        }}
                    />
                </body>
            </Html>
        )
    }
}

export default MyDocument;
