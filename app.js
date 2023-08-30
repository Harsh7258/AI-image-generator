const API_KEY = "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";
const submitInput = document.querySelector("#submit-section");
const inputElement = document.querySelector("input");
const imageSection = document.querySelector(".image-section");

const getImages = async() => {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
             prompt: inputElement.value,
             n: 4,
             size: "1024x1024"
        })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/images/generations', options);
        const data = await response.json();
        console.log(data);

        data?.data.forEach(element => {
            const imageContainer = document.createElement("div");
            imageContainer.classList.add("image-container");

            const imageElement = document.createElement('img')
            imageElement.setAttribute('src', element.url)

            imageContainer.append(imageElement);

            imageSection.append(imageContainer)
        });
    } catch (error) {
        console.log(error);
    }
}

submitInput.addEventListener('click', getImages)