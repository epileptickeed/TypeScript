import React, { createContext, useContext, useState } from 'react'
import jobsData from '../data/jobs.json'



const Context = createContext({} as ContextType)

type FilteredJobsDataType = {
    name: string;
    new: boolean;
    featured: boolean;
    status: string;
    when: string;
    howto: string;
    region: string;
    tags: string[];
}

type ContextType = {
    tags: TagsProps[]
    setTags: React.Dispatch<React.SetStateAction<TagsProps[]>>
    addTag: (item: string) => void
    deleteTag: (id: string) => void
    filteredJobsData: FilteredJobsDataType[]
}


type TagsProps = {
    title: string
    id: string
}

type ChildrenTypeProps = {
    children: React.ReactNode
}

export const MainContext = ({ children }: ChildrenTypeProps) => {

    const [tags, setTags] = useState<TagsProps[]>([])

    const addTag = (item: string) => {
        const itemTag: string = item

        if(!tags.some(tag => tag.title === itemTag)) {
            setTags((curTags: TagsProps[]) => {
                return [
                    ...curTags,
                    {id: crypto.randomUUID(), title: itemTag}
                ]
            })
        }

    }

    const deleteTag = (id: string) => {
        setTags(curTags => {
            return curTags.filter(tag => tag.id !== id)
        })
    }

    const filteredJobsData = jobsData.filter(item => {
        return tags.every(tag => item.tags.includes(tag.title))
    })

  return (
    <Context.Provider value={{
        addTag, deleteTag, filteredJobsData, tags, setTags,
    }}>
        {children}
    </Context.Provider>
  )
}

export const UseMainContext = () => {
    return useContext(Context)
}