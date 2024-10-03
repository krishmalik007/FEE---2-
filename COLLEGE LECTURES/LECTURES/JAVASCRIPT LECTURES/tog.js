    const image = document.querySelector("img");

    function imageToggler() {
    let isTrue = false;

    setInterval(() => {
        if (isTrue) {
        image.setAttribute(
            "src",
            "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg"
        );
        } else {
        image.setAttribute(
            "src",
            "https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg"
        );
        }
        isTrue = !isTrue;
    }, 1000);
    }
    imageToggler();
