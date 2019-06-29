import { useContext, useEffect } from 'react';
import {EffectContext} from "../App";

export default function useSideEffects(type, payload) {
    const effects = useContext(EffectContext);

    useEffect(() => {
        effects({type: type, payload:payload});
    }, [type, payload, effects]);
}
