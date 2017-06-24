export const REFERRAL_JSON = {
    "key"           : "PQELsYRJpHsLznX1YZNFCA",
    "template_name" : "Referal",
    template_content: [],
    "message"       : {
        // "subject"            : "*|FNAME|* has invited you to join Suppl!",
        "from_email"         : "howdy@suppl.co",
        "from_name"          : "Zander from Suppl",
        "to"                 : [
            {
                // "email": "nazzanuk@gmail.com",
                // "name" : "Recipient Name",
                "type" : "to"
            }
        ],
        "headers"            : {
            "Reply-To": "zander@suppl.co"
        },
        "important"          : false,
        "track_opens"        : true,
        "track_clicks"       : true,
        "auto_text"          : null,
        "auto_html"          : null,
        "inline_css"         : null,
        "url_strip_qs"       : null,
        "preserve_recipients": null,
        "view_content_link"  : null,
        "bcc_address"        : "message.bcc_address@example.com",
        "tracking_domain"    : null,
        "signing_domain"     : null,
        "return_path_domain" : null,
        "merge"              : true,
        "merge_language"     : "mailchimp",
        // "global_merge_vars"  : [
        // {
        //     "name"   : "fname",
        //     "content": "Global Value 1"
        // },
        // {
        //     "name"   : "affil",
        //     "content": "1234567"
        // }
        // ],
        // "merge_vars"         : [
        //     {
        //         "rcpt": "nazzanuk@gmail.com",
        //         "vars": [
        //             {
        //                 "name"   : "fname",
        //                 "content": "John"
        //             },
        //             {
        //                 "name"   : "affil",
        //                 "content": "1234567"
        //             }
        //         ]
        //     }
        // ]
    },
    "async"         : true,
    "ip_pool"       : "Main Pool"
}