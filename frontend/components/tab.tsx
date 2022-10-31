import { Tab } from '@headlessui/react'
import IndividualNfts from '../pages/marketplace/individualNft'
import Packs from '../pages/marketplace/packs'
import MyNfts from '../pages/marketplace/mynfts'
import { useState } from 'react'

export function MyTabs() {


  return (
    <div className='grid grid-cols-1 gap-4 place-items-center h-16 w-full bg-blue-900/20'>
      <Tab.Group>
        <Tab.List className='' >
          <Tab className='rounded-xl text-blue-700 focus:ring-2 focus:outline-none ring-offset-2 ring-offset-blue-400 h-16 px-12 font-medium'>Individual Nfts</Tab>
          <Tab className='mx-16 rounded-xl text-blue-700 focus:ring-2 focus:outline-none ring-offset-2 ring-offset-blue-400 h-16 px-12 font-medium'>Packs</Tab>
          <Tab className='rounded-xl text-blue-700 focus:ring-2 focus:outline-none ring-offset-2 ring-offset-blue-400 h-16 px-12 font-medium'>My Nfts</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <IndividualNfts />
          </Tab.Panel>
          <Tab.Panel>
            <Packs />
          </Tab.Panel>
          <Tab.Panel>
            <MyNfts />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}