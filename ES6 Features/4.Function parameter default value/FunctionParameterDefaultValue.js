function example(height = 50, width = 40) { 
    const newH = height * 10;
    const newW = width * 10;
    return newH + newW;
}

const HW = example(); 
console.log(HW);  // 900