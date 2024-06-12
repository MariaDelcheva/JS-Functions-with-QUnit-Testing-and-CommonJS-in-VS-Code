const {fetchData} = require ("./async_test_functions.js")

QUnit.module("fetchData function tests", () => {
    QUnit.test("Fetch data from correct url",  async function (assert) {
        const data = await fetchData ("https://www.zippopotam.us/bg/8000");
        assert.ok(data);
        
    })

    QUnit.test("Fetch data from correct url for Bulgaria",  async function (assert) {
        const data = await fetchData ("https://www.zippopotam.us/bg/8000");
        assert.ok(data.hasOwnProperty('post code', "Data contain 'post code'"));
        assert.equal(data['post code'], '8000', "'post code' is 8000"); 

        assert.ok(data.hasOwnProperty('country', "Data contain 'country'"));
        assert.equal(data['country'], 'Bulgaria', "'country' is Bulgaria"); 

        assert.ok(data.hasOwnProperty('country abbreviation', "Data contain 'country abbreviation'"));
        assert.equal(data['country abbreviation'], 'BG', "'country abbreviation' is BG"); 

        // Check places array 
        assert.ok(Array.isArray(data.places), "'places' is a array");
        assert.equal(data.places.length, 1, "'places' array has one element");


        // Take "place" object
        const place = data.places[0];

        assert.ok(place.hasOwnProperty('place name'), "Place contain  property'place name'");
        assert.equal(place['place name'],'Бургас / Burgas', "Place name contain 'Бургас / Burgas'" );

        assert.ok(place.hasOwnProperty('longitude'), "Place contain property 'longitude'");
        assert.equal(place['longitude'],'27.4667', "Longitude is'27.4667'" );

        assert.ok(place.hasOwnProperty('state'), "Place contain property 'state'");
        assert.equal(place['state'],'Бургас / Burgas', "State is 'Бургас / Burgas'" );

        assert.ok(place.hasOwnProperty('state abbreviation'), "Place contain property 'state abbreviation'");
        assert.equal(place['state abbreviation'],'BGS', "State abbreviation is 'BGS'" );

        assert.ok(place.hasOwnProperty('latitude'), "Place contain property 'latitude'");
        assert.equal(place['latitude'],'42.5', "Latitude is '42.5'" );

    })
   
    QUnit.test("Fetch data from correct url with invalid post code",  async function (assert) {
        const data = await fetchData ("https://www.zippopotam.us/bg/102030405060");
        assert.equal(data, "Fetch failed");
        
    })

    QUnit.test("Fetch data from invalid url with correct post code", async function (assert) {
        const data = await fetchData("https://www.zippopotamSSSSSSS.us/bg/8000");
        assert.equal(data, "Fetch failed");
    });
})