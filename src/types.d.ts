interface Stop {
    color: string,
    opacity: number,
    offset: string|number,
    style: object
}

interface LinearGradient {
    x1: string,
    x2: string,
    y1?: string,
    y2?: string,
    stops: Stop[],
    children: Stop[],
}

interface BackgroundResult {
    background: string,
    angle: number
}
