let boxes: NodeListOf<Element> = document.querySelectorAll(".box");

let player: string = "X";
let isWin: boolean = false;

console.log(boxes)

boxes.forEach(e => {
    e.innerHTML = "";
    e.addEventListener("click", () => {
        if (!isWin && e.innerHTML === "") {
            e.innerHTML = player;
            checkWin();
            checkDraw();
            changePlayer();

        }
    })
});

const changePlayer = () => {
    const bgElement = document.querySelector(".bg") as HTMLElement;

    if (bgElement !== null) {
        if (player === "X") {
            player = "O";
            bgElement.style.left = "50px";
        } else {
            player = "X";
            bgElement.style.left = "0";
        }
    }
}

const checkWin = () => {
    let winConditions: number[][] = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ]

    for (let i = 0; i < winConditions.length; i++) {
        let v0 = boxes[winConditions[i][0]].innerHTML;
        let v1 = boxes[winConditions[i][1]].innerHTML;
        let v2 = boxes[winConditions[i][2]].innerHTML;

        if (v0 != "" && v0 === v1 && v0 === v2) {
            isWin = true;
            const resultElement: HTMLElement = document.querySelector(".result") as HTMLElement;
            resultElement.innerHTML = "Result: " + player + " win";
            const button: HTMLButtonElement = document.querySelector(".reset") as HTMLButtonElement;
            button.style.display = "inline"
        }

    }
}

const checkDraw = () => {
    if (!isWin) {
        let isDraw = true;
        boxes.forEach(e => {
            if (e.innerHTML === "") isDraw = false;
        })

        if (isDraw) {
            isWin = true;
            const resultElement: HTMLElement = document.querySelector(".result") as HTMLElement;
            resultElement.innerHTML = "Result: Draw";
            const button: HTMLButtonElement = document.querySelector(".reset") as HTMLButtonElement;
            button.style.display = "inline"
        }
    }
}

const resetElement: HTMLButtonElement = document.querySelector(".reset") as HTMLButtonElement;

resetElement.addEventListener("click", () => {
    isWin = false;
    player = "X";
    const resultElement: HTMLElement = document.querySelector(".result") as HTMLElement;
    resultElement.innerHTML = "Result";
    const button: HTMLButtonElement = document.querySelector(".reset") as HTMLButtonElement;
    button.style.display = "none"

    boxes.forEach(e => {
        const element: HTMLElement = e as HTMLElement;
        element.innerHTML = "";
        console.log(e)
        element.style.removeProperty("background-color");
    })
})