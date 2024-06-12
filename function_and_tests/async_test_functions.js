async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (response.ok) {
            return await response.json();
        } else {
            return "Fetch failed";
        }
    } catch (error) {
        return "Fetch failed";
    }
}


async function fake_delay(milliseconds){
    return new Promise (resolve => setTimeout(resolve, milliseconds));
}

module.exports = {
    fetchData,
    fake_delay
}
