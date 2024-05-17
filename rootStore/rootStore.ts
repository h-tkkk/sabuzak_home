import { makeObservable, observable } from "mobx";
import { MobXProviderContext } from "mobx-react";
import { useContext } from "react";

interface RootStoreProps {
    headerColor: string;
}

export class RootStore implements RootStoreProps {
    headerColor: string = "transparent";
    homeMainNum: number = 1;
    entering: boolean = false;

    mainScrollStatus: boolean = false;

    constructor() {
        makeObservable(this, {
            headerColor: observable,
            homeMainNum: observable,
            entering: observable,
            mainScrollStatus: observable,
        });
    }

    setHeaderColor = (color: string) => {
        this.headerColor = color;
    };

    setHomeMainNum = (num: number) => {
        this.entering = true;
        this.homeMainNum = num;
    };

    setEntering = (bool: boolean) => {
        this.entering = bool;
    };

    setMainScrollStatus = (bool: boolean) => {
        this.mainScrollStatus = bool;
    };
}

export const useRootStores = (): RootStore => {
    return useContext(MobXProviderContext).rootStore;
};