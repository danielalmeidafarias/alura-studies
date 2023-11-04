import { useEffect, useState } from "react";
import { Task } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from './timer.module.scss'
import { timeToSeconds } from "../../common/utils/time";

interface Props {
    selected: Task | undefined,
    finishTask(): void
}

const Timer = ({ selected, finishTask }: Props) => {
    const [time, setTime] = useState<number>()

    useEffect(() => {
        if(selected?.time) {
            setTime(timeToSeconds(selected.time))
        }
    }, [selected])

    function regression(counter: number = 0) {
        setTimeout(() => {

            if(counter > 0) {
                setTime(counter - 1)
                return regression(counter - 1)
            }

            finishTask()
        }, 1000)
    }

    return (  
        <div className={style.cronometro}>
            <p className={style.titulo}>Choose your card and start Timer</p>
            <div className={style.relogioWrapper}>
                <Clock time={time}/>
            </div>
            <Button
            onClick={() => {regression(time)}}
            >Start</Button>
        </div>
    );
}
 
export default Timer;