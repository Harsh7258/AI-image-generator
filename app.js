const API_KEY = "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";
// API_KEY used one
// to use image generator add new api key

const submitInput = document.querySelector("#submit-section");
const inputElement = document.querySelector("input");
const imageSection = document.querySelector(".image-section");

const getImages = async() => {
    const options = {
        method: "POST",
        // posting the data using POST

        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
            // openAI method
        },
        body: JSON.stringify({
             prompt: inputElement.value,
             // input value is accessed

             n: 4,
             // number of images

             size: "1024x1024"
             // methods of costing the images 
        })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/images/generations', options);
        // image generation link 

        const data = await response.json();
        console.log(data);
        //data fetched by the link

        data?.data.forEach(element => {
            const imageContainer = document.createElement("div");
            // creating image contianer for each image (4)

            imageContainer.classList.add("image-container");
            // adding classList image-container with css properties

            const imageElement = document.createElement('img')
            // display image (4)

            imageElement.setAttribute('src', element.url)
            // setting attribute src to url in data in console.log(data)

            imageContainer.append(imageElement);
            // appending images in image-container

            imageSection.append(imageContainer)
            //appending image-container in image-section
        });
    } catch (error) {
        console.log(error);
    }
}

submitInput.addEventListener('click', getImages)
// click event to fetch the data form url