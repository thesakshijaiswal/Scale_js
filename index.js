
    // Set base width and calculate initial scale factor
    const BASE_WIDTH = 375;
    let scaleFactor = window.innerWidth / BASE_WIDTH;

    // Scaling function
    function scalePx(px) {
        return Math.round(px * scaleFactor);
    }

    // Function to apply scalable styles
    function applyScalableStyles() {
        const container = document.getElementById("scalableContainer");
        const text = document.getElementById("scalableText");

        // Apply scaled styles
        container.style.width = scalePx(300) + "px";
        container.style.height = scalePx(200) + "px";
        container.style.padding = scalePx(20) + "px";
        text.style.fontSize = scalePx(16) + "px";
    }

    // Apply styles initially
    applyScalableStyles();

    // Recalculate scale factor and apply styles on resize
    window.addEventListener('resize', () => {
        scaleFactor = window.innerWidth / BASE_WIDTH;
        applyScalableStyles();
    });
