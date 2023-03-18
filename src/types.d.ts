export default PointJS;

declare function PointJS(width: number, height: number, styles: object, ...args: any[]): void;

declare class PointJS {
    constructor(width: number, height: number, styles: object, ...args: any[]);

    _logo: string;
    game: {
        setFPS: (fps: number) => void;
        getDT: (mls?: number) => number;
        getTime: () => number;
        newLoop: (name: string, func: () => void, start: () => void, end: () => void, events: any) => any;
        newLoopFromClassObject: (name: string, classObject: any) => void;
        newLoopFromConstructor: (name: string, constructor: any) => void;
        setLoopSound: (gameLoop: string, arrAudio: any[]) => void;
        setLoop: (name: string) => void;
        tick: (frame: number, func: () => void) => any;
        skip: (id: string, frame: number, func: () => void) => any;
        isStopped: () => boolean;
        getWH: () => { w: number, h: number, w2: number, h2: number };
        getWH2: () => { w: number, h: number };
        getResolution: () => number;
        startLoop: (gameLoop: string, fps?: number) => void;
        start: (fps?: number) => void;
        stop: () => void;
        resume: () => void;
        newBaseObject: (obj: object) => any;
        newTriangleObject: (obj: { w?: number, h?: number }) => any;
        newRectObject: (obj: { w?: number, h?: number }) => any;
        newRoundRectObject: (obj: { w?: number, h?: number, radius?: number }) => any;
        newCircleObject: (obj: { radius: number }) => any;
        newBackgroundObject: (obj: object) => any;
        newEllipsObject: (obj: object) => any;
        newTextObject: () => any;
        newPolygonObject: () => any;
        newImageObject: () => any;
        newAnimationObject: () => any;
        newMesh: (obj: MeshProps) => Mesh;
        clear: () => void;
        fill: (color: string) => void;
    };
    levels: {
        forStringArray: (obj: object, onSymbol: (symbol: string) => void) => any;
        newLevelFromJSON: (JSONData: string) => any;
        newEmptyLevel: () => any;
    };
    camera: {
        shake: (position: object, radiusWH: object) => void;
        shakeC: (position: object, radiusWH: object) => void;
        scale: (scale: object) => void;
        scaleC: (scale: object) => void;
        circling: (point: object, radius: number, speed: number) => void;
        circlingC: (point: object, radius: number, speed: number) => void;
        motion: (point: object, size: number, speed: number) => void;
        motionC: (point: object, size: number, speed: number) => void;
        follow: (obj: object, slowSpeed: number) => void;
        move: (vector2D: object) => void;
        moveTime: (point: object, time: number) => void;
        moveTimeC: (point: object, time: number) => void;
        setPosition: (point: object) => void;
        setPositionC: (point: object) => void;
        getPosition: (format: number) => object;
        getPositionC: (format: number) => object;
        getStaticBox: () => { x: number, y: number, w: number, h: number };
        getDynamicBox: () => object;
    };
    keyControl: {
        getKeyList: () => string[];
        getCountKeysDown: () => number;
        getAllKeysDown: () => string[];
        getLastKeyPress: () => string;
        isDown: (key: string) => boolean;
        isUp: (key: string) => boolean;
        isPress: (key: string) => boolean;
        getInputChar: () => boolean | string;
        getInputKey: () => boolean | string;
        setInputMode: (mode: boolean) => void;
        isInputMode: () => boolean;
        exitKeyControl: () => void;
        initKeyControl: () => void;
        initControl: () => void;
    };
    mouseControl: {
        getPosition: () => object;
        getPositionS: () => object;
        setCursorImage: (img: string) => void;
        setVisible: (visible: boolean) => void;
        isVisible: () => boolean;
        isDown: (key: MOUSE_KEYS) => boolean;
        isUp: (key: MOUSE_KEYS) => boolean;
        isPress: (key: MOUSE_KEYS) => boolean;
        isMove: () => boolean;
        isInStatic: (box: object) => boolean;
        isInDynamic: (box: object) => boolean;
        isInObject: (obj: object) => boolean;
        isWheel: (key: MOUSE_DIRECTION_ROTATION) => boolean;
        initMouseLock: () => void;
        exitMouseLock: () => void;
        unlockMouse: () => void;
        isMouseLock: () => boolean;
        getSpeed: () => object;
        isPeekStatic: (key: MOUSE_KEYS, box: object) => boolean;
        isPeekDynamic: (key: MOUSE_KEYS, box: object) => boolean;
        isPeekObject: (key: MOUSE_KEYS, obj: object) => boolean;
        initMouseControl: () => void;
        initControl: () => void;
        exitMouseControl: () => void;
    };
    touchControl: {
        isTouchSupported: () => boolean;
        isMobileDevice: () => boolean;
        getFixPositionS: () => object;
        getFixPosition: () => object;
        getRun: () => object;
        getVector: () => object;
        getSpeed: () => object;
        isDown: () => boolean;
        isPress: () => boolean;
        isUp: () => boolean;
        getPosition: () => object;
        getPositionS: () => object;
        isPeekStatic: () => boolean;
        isPeekDynamic: () => boolean;
        isPeekObject: () => boolean;
        isInStatic: () => boolean;
        isInDynamic: () => boolean;
        isInObject: () => boolean;
        getTouches: () => object[];
        initTouchControl: () => void;
        initControl: () => void;
        exitTouchControl: () => void;
    };
    system: {
        log: (message: string) => void;
        consoleLog: (bool: boolean) => void;
        setTitle: (title: string) => void;
        setSettings: (settings: { isShowError?: boolean, isStopForError?: boolean, isAutoClear?: boolean }) => any;
        setDefaultSettings: (settings?: object) => any;
        setSmoothing: (bool: boolean) => any;
        restart: () => void;
        getInfo: () => object;
        delEvent: (evt: string, key: string) => void;
        addEvent: (evt: string, key: string, func: () => void) => void;
        removeDOM: (HTMLObject: any) => void;
        attachDOM: (HTMLObject: any) => void;
        newDOM: (tag: string, lock?: boolean) => any;
        setOffset: (point: object) => void;
        setStyle: (obj: object) => void;
        getCanvas: () => HTMLCanvasElement;
        getContext: () => CanvasRenderingContext2D;
        setContext: (context: CanvasRenderingContext2D) => void;
        resize: (w: number, h: number) => void;
        initFullPage: () => void;
        initFullScreen: () => void;
        exitFullScreen: () => void;
        isFullScreen: () => boolean;
        exitFullPage: () => void;
        initFullScale: () => void;
        exitFullScale: () => void;
        getWH: () => object;
        setContextSettings: (obj: object) => void;
        defaultSettings: () => any;
        initFPSCheck: () => void;
        getFPS: () => number;
    };
    vector: {
        isNumInRange: (num: number, start: number, end: number) => boolean;
        point: (x: number, y: number) => object;
        simplePoint: (a: any, b: any, c: any) => object;
        v2d: (x: number, y: number) => object;
        size: (w: number, h: number) => object;
        getPointAngle: (point: object, center: object, angle: number) => object;
        isPointIn: (point: object, area: object[]) => boolean;
        pointMinus: (point: object, vector2: object) => object;
        pointPlus: (point: object, vector2: object) => object;
        pointInc: (point: object, vector2: object) => object;
        pointDiv: (point: object, vector2: object) => object;
        pointAbs: (point: object) => object;
        getMidPoint: (pointA: object, pointB: object) => object;
        getDistance: (pointA: object, pointB: object) => number;
        isSame: (pointA: object, pointB: object) => boolean;
        getAngle2Points: (point1: object, point2: object) => number;
        newStaticBox: (x: number, y: number, w: number, h: number) => object;
        newDynamicBoxRect: (x: number, y: number, w: number, h: number) => object;
        moveCollision: (player: object, walls: object[], speed: object, onCollision?: (player: object, h: any, u: boolean, g: boolean) => void) => void;
        moveCollisionAngle: (player: object, walls: object[], speed: object, onCollision?: (player: object, h: any, u: boolean, g: boolean) => void, angle?: number) => void;
    };
    math: {
        limit: (numb: number, max: number) => number;
        sign: (numb: number) => number;
        a2r: (angle: number) => number;
        random: (min: number, max: number, excludeZero?: boolean) => number;
        getTextWidth: (text: string, font: number | string) => number;
        randomFY: (array: any[]) => any[];
        toInt: (num: number) => number;
        uid: () => number;
        toZiro: (numb: number, step: number) => number;
    };
    layers: {
        newLayer: (z: number, styles: { backgroundColor: string, alpha: any }) => any;
    };
    colors: {
        rgb: (r: number, g: number, b: number) => string;
        rgba: (r: number, g: number, b: number, a: number) => string;
        hex2rgb: (hex: string) => string;
        hex2rgba: (hex: string, a: number) => string;
        randomColor: (min: number, max: number, alpha: number) => string;
        fromImage: (src: string, repetition: string | null, onLoad?: (event: HTMLImageElement) => void, width?: number, height?: number) => object;
    };
    brush: {
        drawPolygon: (obj: object) => void;
        drawTriangle: (obj: object) => void;
        drawTriangleS: (obj: object) => void;
        drawMultiText: (obj: object) => void;
        drawMultiTextS: (obj: object) => void;
        drawText: (obj: object) => void;
        drawTextS: (obj: object) => void;
        drawTextLines: (obj: object) => void;
        drawTextLinesS: (obj: object) => void;
        drawRect: (obj: object) => void;
        drawRectS: (obj: object) => void;
        drawPoint: (obj: object) => void;
        drawPointS: (obj: object) => void;
        drawRoundRect: (obj: object) => void;
        drawRoundRectS: (obj: object) => void;
        drawCircle: (obj: object) => void;
        drawCircleS: (obj: object) => void;
        drawLineAngle: (obj: object) => void;
        drawLineAngleS: (obj: object) => void;
        drawLine: (obj: object) => void;
        drawLineS: (obj: object) => void;
        drawLineA: (obj: object) => void;
        drawLineAS: (obj: object) => void;
        drawEllips: (obj: object) => void;
        drawEllipsS: (obj: object) => void;
        drawImageS: (obj: object) => void;
        drawImage: (obj: object) => void;
        onContext: () => any;
        getPixelColor: (x: number, y: number) => string;
        setPixelColor: (x?: number, y?: number, pixel?: string) => void;
        onPixel: (x: number, y: number, func: (pixel: object) => void) => void;
        onPixels: (x: number, y: number, w: number, h: number, func: (pixel: object) => void) => void;
        onRawPixels: (x: number, y: number, w: number, h: number, func: (data: any[], length: number) => void) => void;
    };
    audio: {
        newAudio: (file: string, volume: number) => object;
    };
    wAudio: {
        newAudio: (file: string, volume: number) => object;
    };
    resources: {
        isLoaded: () => boolean;
        getProgress: () => number;
    };
    tiles: {
        newDrawImage: (width: number, height: number) => Image;
        newImage: (path: string) => Image;
        newAnimation: (file: string, width: number, height: number, count: number) => Image;
    };
    OOP: {
        extractArrElement: (arr: any[], index: number) => any;
        extractRandArrElement: (arr: any[]) => any;
        drawEach: (obj: object, onDraw: (object)) => any;
        drawArr: (obj: object, onDraw: (object)) => any;
        getArrInCamera: (arr: object[]) => object;
        getArrOutCamera: (arr: object[]) => object;
        readJSON: (path: string, func: (obj: object) => void) => any;
        // toString: () => any;
        sendGET: (link: string, params: object, func: (data: any) => any) => any;
        sendPOST: (link: string, params: object, func: (data: any) => any) => any;
        sendPOSTScreen: (link: string, name: string, func: (data: any) => any) => any;
        isDef: (variable: any) => boolean;
        isSet: (variable: any) => boolean;
        forEach: (arr: any[], func: (value: any, index: number, arr: any[]) => any) => void;
        forInt: (count: number, func: (i: number) => any) => void;
        forXY: (countX: number, countY: number, func: (x: number, y: number) => void) => void;
        forArr: (arr: any[], func: (value: any, index: number, arr: any[]) => void) => void;
        clearArr: (arr: any[]) => void;
        fillArr: (arr: any[], count: void, func: (i: any) => any) => any;
        delObject: (arr: any[], obj: object) => void;
        randArrElement: (arr: any[]) => void;
        readJSONSync: (path: string) => object;
        sendGETSync: (link: string, params: object) => any;
        sendPOSTSync: (link: string, params: object) => any;
        newAJAXListener: (link: string, func: any) => any;
        runCode: (code: string) => any;
        includeSync: (file: string) => void;
        include: (file: string, onincluded: () => void) => void;
        clone: (originalObject: object, func: any) => object;
        newGroup: () => object;
        getTextWidth: (...args: any[]) => any;
        newRever: (min: number, max: number, step: number) => () => {
            update: () => void;
            getValue: () => number;
            setValue: (value: number) => void;
            setStep: (step: number) => void;
            getStep: () => number;
        };
        once: (name: string, func: () => void) => void;
        newTimer: (time: number, func: () => void) => {
            start: () => void;
            end: () => void;
            stop: () => void;
            restart: (newTime?: number) => void;
        };
    };
    memory: {
        local: {
            storage: WindowLocalStorage['localStorage'];
            clear: () => void;
            save: (key: string, value: string) => void;
            saveAsObject: (key: string, value: any) => void;
            loadAsObject: (key: string) => object;
            load: (key: string) => string;
            loadAsNumber: (key: string) => number;
        },
        temp: {
            values: object;
            save: (key: string, value: object) => void;
            load: (key: string) => any;
            loadAsNumber: (key: string) => number;
        }
    };
    modules: {
        import: (path: string, func: (a: any) => void) => void;
        importSync: (path: string) => any;
    };
    zList: {
        useZValue: () => void;
        useYValue: () => void;
        add: (obj: object) => void;
        init: (arr: object[]) => void;
        draw: () => void;
        del: (obj: object) => void;
        update: () => void;
    };
    filters: {
        setCSSFilter: (a: any, b?:any) => void;
        clearCSSFilter: (a: any) => void;
        setCSSTransform: (a: any, b?:any) => void;
        clearCSSTransform: (a: HTMLElement) => void;
    };
    presets: {
        key: object;
        keyMoveInit: (name: string, speed: number, right: string, left: string, up: string, down: string) => void;
        keyMoveCollision: (wall: object) => void;
        keyMove: () => void;
        mouse: () => object;
        mouseMoveInit: (name: string, speed: number, type: 1 | 2 | 3 | 4 | 5, tracking: 1 | 0) => void;
        mouseMoveCollision: (wall: object) => void;
        mouseMove: () => void;
        bgCycle: (image: object, speedX: number, speedY: number, DX: number, DY: number) => void;
        physics: object;
        physicsMoveInit: (name: any, speed: number, gravity: number, density: number, bounce: number, sticking: number, minBounce: number, speedRotation: number, stopRotation: 1 | 0, accelerationDown, D: string[], A: string[], W_KEY: string[], W_MOUSE: string[]) => void;
        physicsMoveCollision: (wall: any) => void;
        physicsMove: () => void;
    };
    mmorpg: {};
}


export interface MeshProps {
    x?: number;
    y?: number;
    angle?: number;
    add?: object[]
}

export interface Mesh {
    getCount: () => number;
    getObjects: () => object[];
    add: (obj: object) => void;
    del: (obj: object) => void;
    draw: () => void;
    move: (point: any) => void;
    turn: (angle: number) => void;
    setAngle: (angle: number) => void;
    setPosition: (position: any) => void;
    isDynamicIntersect: (dynamicBox: any[]) => boolean;
    isStaticIntersect: (staticBox: any) => boolean;
    isIntersect: (obj: any) => boolean;
}

export interface Image {
    onContext: (func: (context: CanvasRenderingContext2D, width: number, height: number) => void) => void;
    getCanvas: () => HTMLCanvasElement
    getAnimation: (x: number, y: number, w: number, h: number, count: number) => Animation
}

export interface Animation {
    image: {
        onContext: (func: any) => void;
        getCanvas: () => HTMLCanvasElement;
        getAnimation: (...args: any) => any;
    };
    onContext: (func: any) => void;
    getImage: (...args: any) => any;
    getCount: (...args: any) => number;
}

export type MOUSE_KEYS = "LEFT" | "RIGHT" | "MIDDLE";
export type MOUSE_DIRECTION_ROTATION = "UP" | "DOWN";

