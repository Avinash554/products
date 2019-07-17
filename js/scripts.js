

/*  
   Table Of Content
   
   1. Preloader
   2. Scroll To Top
   3. Magnific Popup
 
*/


(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        /* Made a service call getting 403 so i added below products object */

        //         const url = 'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json';
        //   var xhttp = new XMLHttpRequest();
        //   xhttp.onreadystatechange = function () {
        //     if (this.readyState == 4 && this.status == 200) {
        //       const response = xhttp.responseText;
        //       console.log(' --- http response ', response);
        //     }
        //   };
        //   xhttp.open("GET", "https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json");
        //   xhttp.responseType = 'json';
        //   xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
        //   xhttp.send();

        const productsObject = {
            "id": "shop/new/all-new",
            "name": "All New",
            "categoryType": "subcat",
            "groups": [{
                "id": "under-shelf-plate-rack-d6541",
                "name": "Under Shelf Kitchen Rack",
                "links": { "www": "https://www.westelm.com/products/under-shelf-plate-rack-d6541/" },
                "price": { "regular": 25, "selling": 25 },
                "thumbnail": {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "thumbnail",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201928/0034/under-shelf-kitchen-rack-m.jpg",
                    "height": 363
                },
                "hero": {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "hero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201928/0034/under-shelf-kitchen-rack-m.jpg",
                    "height": 363
                },
                "images": [],
                "swatches": [],
                "messages": [],
                "flags": [],
                "reviews": {
                    "recommendationCount": 0,
                    "likelihood": 0,
                    "reviewCount": 0,
                    "averageRating": 0,
                    "id": "under-shelf-plate-rack-d6541",
                    "type": "GROUP_REVIEWS"
                }
            }, {
                "id": "cotton-cloud-jersey-duvet-cover-shams-light-heather-gray-t5082",
                "name": "Cotton Cloud Jersey Duvet Cover + Shams - Light Heather Gray",
                "links": { "www": "https://www.westelm.com/products/cotton-cloud-jersey-duvet-cover-shams-light-heather-gray-t5082/" },
                "priceRange": { "regular": { "high": 199, "low": 34 }, "selling": { "high": 159, "low": 27 }, "type": "special" },
                "thumbnail": {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "thumbnail",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0026/cotton-cloud-jersey-duvet-cover-shams-m.jpg",
                    "height": 363
                },
                "hero": {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "hero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0026/cotton-cloud-jersey-duvet-cover-shams-m.jpg",
                    "height": 363
                },
                "images": [{
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0021/cotton-cloud-jersey-duvet-cover-shams-m.jpg",
                    "height": 363
                }],
                "swatches": [],
                "messages": [],
                "flags": [{ "bopisSuppress": false, "rank": 3, "id": "newcore" }, {
                    "bopisSuppress": false,
                    "rank": 7,
                    "id": "organic"
                }, { "bopisSuppress": false, "rank": 9, "id": "fairTrade" }],
                "reviews": {
                    "recommendationCount": 0,
                    "likelihood": 0,
                    "reviewCount": 0,
                    "averageRating": 0,
                    "id": "cotton-cloud-jersey-duvet-cover-shams-light-heather-gray-t5082",
                    "type": "GROUP_REVIEWS"
                }
            }, {
                "id": "cotton-cloud-jersey-duvet-cover-shams-medium-heather-gray-t5083",
                "name": "Cotton Cloud Jersey Duvet Cover + Shams - Medium Heather Gray",
                "links": { "www": "https://www.westelm.com/products/cotton-cloud-jersey-duvet-cover-shams-medium-heather-gray-t5083/" },
                "priceRange": { "regular": { "high": 199, "low": 34 }, "selling": { "high": 159, "low": 27 }, "type": "special" },
                "thumbnail": {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "thumbnail",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0034/cotton-cloud-jersey-duvet-cover-shams-medium-heather-gray-m.jpg",
                    "height": 363
                },
                "hero": {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "hero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0034/cotton-cloud-jersey-duvet-cover-shams-medium-heather-gray-m.jpg",
                    "height": 363
                },
                "images": [{
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0023/cotton-cloud-jersey-duvet-cover-shams-m.jpg",
                    "height": 363
                }, {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0034/cotton-cloud-jersey-duvet-cover-shams-medium-heather-gray-1-m.jpg",
                    "height": 363
                }, {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201926/0014/speckled-throws-1-m.jpg",
                    "height": 363
                }],
                "swatches": [],
                "messages": [],
                "flags": [{ "bopisSuppress": false, "rank": 3, "id": "newcore" }, {
                    "bopisSuppress": false,
                    "rank": 7,
                    "id": "organic"
                }, { "bopisSuppress": false, "rank": 9, "id": "fairTrade" }],
                "reviews": {
                    "recommendationCount": 0,
                    "likelihood": 0,
                    "reviewCount": 0,
                    "averageRating": 0,
                    "id": "cotton-cloud-jersey-duvet-cover-shams-medium-heather-gray-t5083",
                    "type": "GROUP_REVIEWS"
                }
            }, {
                "id": "parquet-texture-duvet-cover-shams-t5080",
                "name": "Parquet Texture Duvet Cover + Shams",
                "links": { "www": "https://www.westelm.com/products/parquet-texture-duvet-cover-shams-t5080/" },
                "priceRange": { "regular": { "high": 199, "low": 34 }, "selling": { "high": 159, "low": 27 }, "type": "special" },
                "thumbnail": {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "thumbnail",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201926/0013/parquet-texture-duvet-cover-shams-2-m.jpg",
                    "height": 363
                },
                "hero": {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "hero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201926/0013/parquet-texture-duvet-cover-shams-2-m.jpg",
                    "height": 363
                },
                "images": [{
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201926/0013/parquet-texture-duvet-cover-shams-1-m.jpg",
                    "height": 363
                }, {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201926/0018/parquet-texture-duvet-cover-shams-m.jpg",
                    "height": 363
                }, {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201926/0017/parquet-texture-duvet-cover-shams-m.jpg",
                    "height": 363
                }, {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201926/0013/parquet-texture-duvet-cover-shams-m.jpg",
                    "height": 363
                }],
                "swatches": [],
                "messages": [],
                "flags": [{ "bopisSuppress": false, "rank": 7, "id": "organic" }, {
                    "bopisSuppress": false,
                    "rank": 9,
                    "id": "fairTrade"
                }],
                "reviews": {
                    "recommendationCount": 0,
                    "likelihood": 0,
                    "reviewCount": 0,
                    "averageRating": 0,
                    "id": "parquet-texture-duvet-cover-shams-t5080",
                    "type": "GROUP_REVIEWS"
                }
            }, {
                "id": "organic-sateen-reversible-duvet-cover-shams-pink-blossom-b2826",
                "name": "Organic Sateen Reversible Duvet Cover + Shams - Pink Blossom",
                "links": { "www": "https://www.westelm.com/products/organic-sateen-reversible-duvet-cover-shams-pink-blossom-b2826/" },
                "priceRange": { "regular": { "high": 159, "low": 34 }, "selling": { "high": 127, "low": 27 }, "type": "special" },
                "thumbnail": {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "thumbnail",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0032/organic-reversible-duvet-cover-shams-m.jpg",
                    "height": 363
                },
                "hero": {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "hero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0032/organic-reversible-duvet-cover-shams-m.jpg",
                    "height": 363
                },
                "images": [{
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201926/0017/organic-sateen-reversible-duvet-cover-shams-m.jpg",
                    "height": 363
                }, {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0034/organic-reversible-duvet-cover-shams-pink-blossom-1-m.jpg",
                    "height": 363
                }, {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201926/0017/organic-sateen-reversible-duvet-cover-shams-pink-blossom-m.jpg",
                    "height": 363
                }, {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201926/0017/organic-sateen-reversible-duvet-cover-shams-1-m.jpg",
                    "height": 363
                }],
                "swatches": [],
                "messages": [],
                "flags": [{ "bopisSuppress": false, "rank": 3, "id": "newcore" }, {
                    "bopisSuppress": false,
                    "rank": 7,
                    "id": "organic"
                }],
                "reviews": {
                    "recommendationCount": 0,
                    "likelihood": 0,
                    "reviewCount": 0,
                    "averageRating": 0,
                    "id": "organic-sateen-reversible-duvet-cover-shams-pink-blossom-b2826",
                    "type": "GROUP_REVIEWS"
                }
            }, {
                "id": "organic-sateen-reversible-duvet-cover-shams-frost-gray-b2825",
                "name": "Organic Sateen Reversible Duvet Cover + Shams - Frost Gray",
                "links": { "www": "https://www.westelm.com/products/organic-sateen-reversible-duvet-cover-shams-frost-gray-b2825/" },
                "priceRange": { "regular": { "high": 159, "low": 34 }, "selling": { "high": 127, "low": 27 }, "type": "special" },
                "thumbnail": {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "thumbnail",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0034/organic-reversible-duvet-cover-shams-frost-gray-m.jpg",
                    "height": 363
                },
                "hero": {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "hero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0034/organic-reversible-duvet-cover-shams-frost-gray-m.jpg",
                    "height": 363
                },
                "images": [{
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0024/organic-reversible-duvet-cover-shams-m.jpg",
                    "height": 363
                }, {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0021/organic-reversible-duvet-cover-shams-1-m.jpg",
                    "height": 363
                }],
                "swatches": [],
                "messages": [],
                "flags": [{ "bopisSuppress": false, "rank": 3, "id": "newcore" }, {
                    "bopisSuppress": false,
                    "rank": 7,
                    "id": "organic"
                }],
                "reviews": {
                    "recommendationCount": 0,
                    "likelihood": 0,
                    "reviewCount": 0,
                    "averageRating": 0,
                    "id": "organic-sateen-reversible-duvet-cover-shams-frost-gray-b2825",
                    "type": "GROUP_REVIEWS"
                }
            }, {
                "id": "organic-sateen-reversible-duvet-cover-shams-regal-blue-b2824",
                "name": "Organic Sateen Reversible Duvet Cover + Shams - Regal Blue",
                "links": { "www": "https://www.westelm.com/products/organic-sateen-reversible-duvet-cover-shams-regal-blue-b2824/" },
                "priceRange": { "regular": { "high": 159, "low": 34 }, "selling": { "high": 127, "low": 27 }, "type": "special" },
                "thumbnail": {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "thumbnail",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0034/organic-reversible-duvet-cover-shams-regal-blue-m.jpg",
                    "height": 363
                },
                "hero": {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "hero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0034/organic-reversible-duvet-cover-shams-regal-blue-m.jpg",
                    "height": 363
                },
                "images": [{
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0023/organic-reversible-duvet-cover-shams-1-m.jpg",
                    "height": 363
                }, {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0023/organic-reversible-duvet-cover-shams-2-m.jpg",
                    "height": 363
                }],
                "swatches": [],
                "messages": [],
                "flags": [{ "bopisSuppress": false, "rank": 3, "id": "newcore" }, {
                    "bopisSuppress": false,
                    "rank": 7,
                    "id": "organic"
                }],
                "reviews": {
                    "recommendationCount": 0,
                    "likelihood": 0,
                    "reviewCount": 0,
                    "averageRating": 0,
                    "id": "organic-sateen-reversible-duvet-cover-shams-regal-blue-b2824",
                    "type": "GROUP_REVIEWS"
                }
            }, {
                "id": "roar-rabbit-prism-stripe-duvet-cover-shams-t5089",
                "name": "Roar + Rabbit&#8482; Prism Stripe Duvet Cover + Shams",
                "links": { "www": "https://www.westelm.com/products/roar-rabbit-prism-stripe-duvet-cover-shams-t5089/" },
                "priceRange": { "regular": { "high": 259, "low": 34 }, "selling": { "high": 207, "low": 27 }, "type": "special" },
                "thumbnail": {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "thumbnail",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0023/roar-rabbit-prism-stripe-duvet-cover-shams-m.jpg",
                    "height": 363
                },
                "hero": {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "hero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0023/roar-rabbit-prism-stripe-duvet-cover-shams-m.jpg",
                    "height": 363
                },
                "images": [{
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0024/roar-rabbit-prism-stripe-duvet-cover-shams-m.jpg",
                    "height": 363
                }],
                "swatches": [],
                "messages": [],
                "flags": [{ "bopisSuppress": false, "rank": 3, "id": "newcore" }, {
                    "bopisSuppress": false,
                    "rank": 9,
                    "id": "fairTrade"
                }],
                "reviews": {
                    "recommendationCount": 0,
                    "likelihood": 0,
                    "reviewCount": 0,
                    "averageRating": 0,
                    "id": "roar-rabbit-prism-stripe-duvet-cover-shams-t5089",
                    "type": "GROUP_REVIEWS"
                }
            }, {
                "id": "organic-sateen-slanted-dots-duvet-cover-shams-t5088",
                "name": "Organic Sateen Slanted Dots Duvet Cover + Shams",
                "links": { "www": "https://www.westelm.com/products/organic-sateen-slanted-dots-duvet-cover-shams-t5088/" },
                "priceRange": { "regular": { "high": 159, "low": 34 }, "selling": { "high": 127, "low": 27 }, "type": "special" },
                "thumbnail": {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "thumbnail",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0025/organic-sateen-slanted-dots-duvet-cover-shams-m.jpg",
                    "height": 363
                },
                "hero": {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "hero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0025/organic-sateen-slanted-dots-duvet-cover-shams-m.jpg",
                    "height": 363
                },
                "images": [{
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0025/organic-sateen-slanted-dots-duvet-cover-shams-1-m.jpg",
                    "height": 363
                }, {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201926/0013/silk-ombre-striations-pillow-covers-2-m.jpg",
                    "height": 363
                }, {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201925/0034/andes-wide-bed-3-m.jpg",
                    "height": 363
                }],
                "swatches": [],
                "messages": [],
                "flags": [{ "bopisSuppress": false, "rank": 3, "id": "newcore" }, {
                    "bopisSuppress": false,
                    "rank": 7,
                    "id": "organic"
                }, { "bopisSuppress": false, "rank": 9, "id": "fairTrade" }],
                "reviews": {
                    "recommendationCount": 0,
                    "likelihood": 0,
                    "reviewCount": 0,
                    "averageRating": 0,
                    "id": "organic-sateen-slanted-dots-duvet-cover-shams-t5088",
                    "type": "GROUP_REVIEWS"
                }
            }, {
                "id": "tencel-crescent-stitch-quilt-shams-stone-white-t5091",
                "name": "TENCEL&#8482; Crescent Stitch Quilt + Shams - Stone White",
                "links": { "www": "https://www.westelm.com/products/tencel-crescent-stitch-quilt-shams-stone-white-t5091/" },
                "priceRange": { "regular": { "high": 229, "low": 44 }, "selling": { "high": 183, "low": 35 }, "type": "special" },
                "thumbnail": {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "thumbnail",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0034/tencel-crescent-stitch-quilt-shams-stone-white-m.jpg",
                    "height": 363
                },
                "hero": {
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "hero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0034/tencel-crescent-stitch-quilt-shams-stone-white-m.jpg",
                    "height": 363
                },
                "images": [{
                    "size": "m",
                    "meta": "",
                    "alt": "",
                    "rel": "althero",
                    "width": 363,
                    "href": "https://www.westelm.com/weimgs/rk/images/wcm/products/201924/0025/tencel-crescent-stitch-quilt-shams-m.jpg",
                    "height": 363
                }],
                "swatches": [],
                "messages": [],
                "flags": [{ "bopisSuppress": false, "rank": 3, "id": "newcore" }, {
                    "bopisSuppress": false,
                    "rank": 8,
                    "id": "handmade"
                }],
                "reviews": {
                    "recommendationCount": 0,
                    "likelihood": 0,
                    "reviewCount": 0,
                    "averageRating": 0,
                    "id": "tencel-crescent-stitch-quilt-shams-stone-white-t5091",
                    "type": "GROUP_REVIEWS"
                }
            }],
            "totalPages": 50,
            "categories": []
        };

        /* Preloader */
        $(window).on('load', function () {
            $('body').addClass('loaded');
        });

        /* Scroll To Top */
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 500) {
                $('.scroll-to-top').fadeIn();
            } else {
                $('.scroll-to-top').fadeOut();
            }
        });
        const row = document.getElementById('products_row');

        productsObject.groups.forEach((each_group, index) => {
            let priceComponent = '';

            if (each_group.hasOwnProperty('price')) {
                priceComponent = `<div id="price_container"><strike>${each_group.price.regular}</strike><b> &#36;${each_group.price.selling}</b></div>`
            }

            if (each_group.hasOwnProperty('priceRange')) {
                priceComponent = `<div id="price_container"><strike>${each_group.priceRange.regular.low}-${each_group.priceRange.regular.high}</strike><b> &#36;${each_group.priceRange.selling.low}-${each_group.priceRange.selling.high}</b></div>`
            }

            row.innerHTML += `<div class="col-md-4 col-sm-6 col-xs-12">
                            <div class="item" id=${each_group.id}>
                                <a href="" class="products-popup" class="products-popup" title=${each_group.id} id=${index} tabindex="0">
                                    <img src=${each_group.hero.href} alt=${each_group.hero.alt} height=${each_group.hero.height} width=${each_group.hero.width}>
                                </a>
                                <div tabindex="0">${each_group.name}</div>
                                <div tabindex="0">${priceComponent}</div>
                            </div>
                        </div>`;
        });

        $('.scroll-to-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });

        /* Magnific Popup */

        $(document).on("click", '.products-popup', function (e) {
            e.preventDefault();
            var selected_img_url = $("#" + this.id + ' img').attr("src");
            $("#" + this.id).magnificPopup({
                type: 'image', // this is a default type
                gallery: {
                    enabled: true
                },
                items: [
                    {
                        src: selected_img_url,
                        // title:selected_product_name
                    }
                ]
            }).magnificPopup('open');
            return false;

        });
    });
})(jQuery);