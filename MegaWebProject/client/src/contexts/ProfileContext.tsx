import React, { useState, useMemo } from "react"
import ProfileInfo from "../objects/ProfileInfo"
import profileRepository from "../repositories/ProfileRepository"

interface IProfileContext {
    getInfo: () => Promise<ProfileInfo>
}

export const ProfileContext = React.createContext<IProfileContext>({
    getInfo() {
        throw Error("Отсутствует реализация метода")
    },
})

export const ProfileContextProvider = ({ children }: any) => {

    const getInfo = async (): Promise<ProfileInfo> => {
        let data = await profileRepository.getInfo();
        return data;
    }

    return (
        <ProfileContext.Provider value={{ getInfo }} >
            {children}
        </ProfileContext.Provider>
    )
}