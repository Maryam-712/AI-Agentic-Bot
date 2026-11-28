'use client'

import { Button } from '@/components/ui/button'
import { ArrowUp, BriefcaseBusiness, Mail, Plus, Search } from 'lucide-react'
import React, { useState } from 'react'

const quickSuggestions = [
    {
  label: 'Find AI Jobs',
  prompt: 'Find the latest AI-related job opportunities matching my skills and experience, including remote positions.'
},
{
  label: 'Inbox Summary',
  prompt: 'Summarize my latest emails, highlight important messages, and identify any pending actions or replies.'
},
{
  label: 'Research Topic',
  prompt: 'Research a topic in depth and provide key findings, reliable sources, and practical insights.'
},
{
  label: 'Plan My Day',
  prompt: 'Help me plan my day by organizing my tasks into a realistic schedule based on priorities and deadlines.'
},
{
  label: 'Reddit Trends',
  prompt: 'Explore Reddit discussions to identify trending topics, popular opinions, and emerging discussions in my areas of interest.'
}
  ]

const templates = [
  {
    title:'Find latest jobs',
    description:'Discover the latest job opportunities matching your skills and career interests.',
    icon: BriefcaseBusiness,
    iconBg:'bg-orange-100',
    iconColor:'text-orange-600',
    border:'hover:border-orange-300',
    glow:'hover:shhadow-orange-300',
  },
  {
    title:'Daily inbox summary',
    description:'Get a quick summary of important emails, unread messages, and pending replies.',
    icon: Mail,
    iconBg:'bg-blue-100',
    iconColor:'text-blue-600',
    border:'hover:border-blue-300',
    glow:'hover:shhadow-blue-300',
  },
  {
    title:'Research a topic',
    description:'Explore any topic and get key insights, useful information, and reliable sources.',
    icon: Search,
    iconBg:'bg-purple-100',
    iconColor:'text-purple-600',
    border:'hover:border-purple-300',
    glow:'hover:shhadow-purple-300',
  }
]


const CreateAgent = () => {

  const [prompt, setPrompt] = useState('');

  return (
    <div className='mt-5 flex gap-2 flex-col'>
      {/* headings */}
      <div>
        <h2 className='text-2xl font-semibold tracking-tight'>Create New Agent </h2>
        <p className='mt-1 mb-2 txt-sm text-muted-foreground'>Ask what type of agent you wnat to create, Type your goal, task or workflow</p>
      </div>

    {/* prompt box */}
      <div className='w-full border rounded-2xl bg-background p-3 shadow-lg shadow-purple-100 hover:shadow-purple-200'>
        <textarea placeholder='Describe what type of agent you want to create'
        className='min-h-[90px] w-full resize-none bg-transparent p-2 text-sm outline-none'
        value={prompt}  onChange={(e)=>setPrompt(e.target.value)}/>
      
      <div  className='flex justify-between  items-center'>
        <div className=''>
          <Button variant={'ghost'} size={'icon'}>
            <Plus/>
          </Button>
          </div>
          <Button size={'icon'} className={'h-9 w-9 rounded-full bg-purple-600'}>
            <ArrowUp />
          </Button>
        </div>
     
      </div>

    {/* suggestions */}
    <div className='flex flex-row gap-2 mt-1'>
      {quickSuggestions.map((suggestion,index)=>(
        <Button key={index} variant={'outline'} className={'cursor-pointer hover:bg-purple-700 hover:bg-purple-200'}
        onClick={()=>setPrompt(suggestion.prompt)}>
          {suggestion.label}
        </Button>
      ))}
    </div>

     {/* templates */}
     <div className='mt-15'>
      <h2 className='flex justify-between items-center font-semibold text-xl'>
        Get Started <span className='text-sm font-normal'>View All</span></h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
          {templates.map((template,index)=>(
            <div key={index} className={`border rounded-2xl p-5 cursor-pointer hover:shadow-lg ${template.glow} ${template.border}`}>
              <template.icon className={`h-12 w-12 p-2 ${template.iconBg} ${template.iconColor}  rounded-lg `}/>
              <div className='mt-6'>
              <h2 className='font-semibold text-foreground'>{template.title}</h2>
              <p className='text-sm mt-2 leading-5 text-muted-foreground'>{template.description}</p>
              </div>
            </div>
          ))}
        </div>
     </div>
    </div>
  )
}

export default CreateAgent