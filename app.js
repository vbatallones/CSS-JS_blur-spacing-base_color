const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    console.log(this.value);
}

// listens on a certain spot
inputs.forEach(input => input.addEventListener('change', handleUpdate))

// listens on the mouse movement in the element
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))