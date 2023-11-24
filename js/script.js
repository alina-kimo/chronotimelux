document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggle-button");
    
    toggleButtons.forEach(function(toggleButton) {
        toggleButton.addEventListener("click", function() {
            const infoBlock = toggleButton.closest(".info-block");
            const infoContent = infoBlock.querySelector(".info-content");
            const plusIcon = toggleButton.querySelector(".plus-icon");
            let isContentVisible = infoContent.style.display !== "none";
            
            if (isContentVisible) {
                infoContent.style.display = "none";
                plusIcon.style.transform = "rotate(0deg)";
            } else {
                infoContent.style.display = "block";
                plusIcon.style.transform = "rotate(45deg)";
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggle-button1");
    
    toggleButtons.forEach(function(toggleButton) {
        toggleButton.addEventListener("click", function() {
            const infoBlock = toggleButton.closest(".info-block");
            const infoContent = infoBlock.querySelector(".info-content");
            const plusIcon = toggleButton.querySelector(".plus-icon");
            let isContentVisible = infoContent.style.display !== "none";
            
            if (isContentVisible) {
                infoContent.style.display = "none";
                plusIcon.style.transform = "rotate(0deg)";
            } else {
                infoContent.style.display = "block";
                plusIcon.style.transform = "rotate(45deg)";
            }
        });
    });
});


