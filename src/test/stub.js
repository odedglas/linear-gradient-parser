const simpleGradient = {
    x1: '17.5001',
    y1: '32',
    x2: '17.5001',
    y2: '2.9711',
    stops: [
        { color: '#FCC3A4', offset: '0', opacity: 0.5 },
        { color: '#AAA899', offset: '1' }
    ],
    angle: 0,
    background: 'linear-gradient(0deg, rgba(252, 195, 164, 0.5) 0%, rgb(170, 168, 153) 100%)',
    string: `<linearGradient xmlns="http://www.w3.org/2000/svg" gradientUnits="userSpaceOnUse" x1="17.5001" y1="32" x2="17.5001" y2="2.9711">
            <stop offset="0" stop-color="#FCC3A4" stop-opacity="0.5"/>
            <stop offset="1" style="stop-color:#AAA899"/>
        </linearGradient>`,
};

const simpleGradientOneStop = {
    stops: [
        { color: '#FCC3A4', offset: '0', opacity: 0.5 },
    ],
    angle: 0,
    background: 'rgba(252, 195, 164, 0.5)'
};

export {
    simpleGradient,
    simpleGradientOneStop
};
