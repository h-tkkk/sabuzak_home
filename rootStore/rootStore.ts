import { action, makeObservable, observable } from "mobx";
import { MobXProviderContext } from "mobx-react";
import { useContext } from "react";

interface RootStoreProps {
    headerColor: string;
    homeMainNum: number;
    entering: boolean;
    mainScrollStatus: boolean;
    sidebarOpen: boolean;
}

export class RootStore implements RootStoreProps {
    headerColor: string = "transparent";
    homeMainNum: number = 1;
    entering: boolean = false;

    mainScrollStatus: boolean = false;
    sidebarOpen: boolean = false;

    constructor() {
        makeObservable(this, {
            headerColor: observable,
            homeMainNum: observable,
            entering: observable,
            mainScrollStatus: observable,
            sidebarOpen: observable,
            setHeaderColor: action,
            setHomeMainNum: action,
            setEntering: action,
            setMainScrollStatus: action,
            setSidebarOpen: action,
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

    setSidebarOpen = (bool: boolean) => {
        this.sidebarOpen = bool;
    };
}

export const useRootStores = (): RootStore => {
    return useContext(MobXProviderContext).rootStore;
};
