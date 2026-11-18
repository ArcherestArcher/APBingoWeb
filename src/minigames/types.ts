export interface Minigame {
    id: string;
    name: string;
    goal: number;
    highScore: number;
    devScore: number;
    scoreType?: "number" | "time";
    lowerIsBetter?: boolean;
    start?: (
        container: HTMLElement,
        onGameLost?: (score: number, win: boolean) => void,
        onGoalReached?: () => void
    ) => (() => void) | void;
}