import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { api } from "../components/services/api";

type Transection = {
    id: number
    title: string
    amount: number
    type: string
    category: string
    createdAt: string
}


type TransectionInput = Omit<Transection, 'id' | 'createdAt'> 

type  TransectionsProviderProps = {
    children: ReactNode
}

type TransectionContextData = {
    transections: Transection[]
    createTransection: (transection: TransectionInput) => Promise<void>
}

export const TransectionContext = createContext<TransectionContextData>({} as TransectionContextData);

export function TransectionsProvider({ children }: TransectionsProviderProps) {
    const [transections, setTransection] = useState<Transection[]>([])

    
    useEffect(() => {
        api.get('/transection')
        .then(response => setTransection(response.data.transections))
    }, [])
    
    async function createTransection(transectionInput: TransectionInput) {
       const response = await api.post('/transection', {
           ...transectionInput,
           createdAt: new Date(),
        })

       const { transection } = response.data

       setTransection([
           ...transections,
           transection,
       ])
    } 

    return(
        <TransectionContext.Provider value={{transections, createTransection}}>
            {children}
        </TransectionContext.Provider>
    )
}

export function useTransections() {
    const context = useContext(TransectionContext)

    return context
}