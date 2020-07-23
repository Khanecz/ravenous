const apiKey = "5B3dyUmyimGAwUznqRpbpoQ0ogTKWKTo2_xhdEeQjskxRmcN_0Eo3dje9pn8pGsQeRtb6ij_dZHyPvLWHsMmpuWL-XmyPMYg-Dk-i9Ijo6YjtgiPb6R-ERxTY1AZX3Yx";

export const Yelp= {
    search(term,location,sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
         {headers: { Authorization : `Bearer ${apiKey}`}}).then(response => {
             return response.json();
         }).then( jsonResponse => {
             if (jsonResponse.businesses) {
                 return jsonResponse.businesses.map(((business) => {
                     return {                     
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.address1,
                        city: business.city,
                        state: business.state,
                        zipCode: business.zip_code,
                        category: business.categories.title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                 }));
             }
         })
    }
};



