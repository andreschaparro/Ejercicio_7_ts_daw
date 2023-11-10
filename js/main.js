class Main {
    constructor() {
        this._counter = 0;
    }
    handleEvent(evt) {
        this._counter++;
        let btn = this._myf.getElementByEvent(evt);
        btn.textContent = `click: ${this._counter}`;
    }
    main() {
        this._myf = new MyFramework();
        let b = this._myf.getElementById("boton");
        console.log(b);
        b.textContent = "Haceme click!";
        b.addEventListener("click", this);
    }
}
window.onload = () => {
    let m = new Main();
    m.main();
};
