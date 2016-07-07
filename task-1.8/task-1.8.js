function colorsCount() {
    const HEIGHT = 600;
    const WIDTH = 800;
    const COLORS = 262144;
    const MEMORY_PC = 1048576;
    const BIT_IN_BYTE = 8;

    var memoryPCbytes = MEMORY_PC * BIT_IN_BYTE;

    var pixelMemory = Math.log(COLORS) / Math.log(2);

    var memoryPicture = HEIGHT * WIDTH * pixelMemory;

    if (memoryPicture > memoryPCbytes) {
        console.log('No space on Disc...');
    }else{
        console.log('OK!')
    }
};

colorsCount();
