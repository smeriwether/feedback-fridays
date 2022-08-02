import React, { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SecondaryButton from '../../components/SecondaryButton'
import { newTeammateBuilder, Teammate } from '../../models/Teammate'
import { encodeTeammates } from '../../utils/encoding'

const Home = () => {
  const navigate = useNavigate()
  const [participatingTeammates, setParticipatingTeammates] = useState<Teammate[]>([
    newTeammateBuilder(),
    newTeammateBuilder(),
  ])

  const updateTeammateName = (teammateToUpdate: Teammate, newName: string) => {
    setParticipatingTeammates(
      participatingTeammates.map((teammate) => {
        if (teammate.id === teammateToUpdate.id) {
          teammate.name = newName
        }
        return teammate
      }),
    )
  }

  const addParticipatingTeammate = () => {
    setParticipatingTeammates([...participatingTeammates, newTeammateBuilder()])
  }

  const removeParticipatingTeammate = (teammate: Teammate) => {
    setParticipatingTeammates(participatingTeammates.filter((t) => t.id !== teammate.id))
  }

  const startFeedbackSession = () => {
    navigate('/explain/' + encodeTeammates(participatingTeammates.filter(t => t.name)))
  }

  return (
    <div>
      <header>
        <h1 className='text-3xl font-bold'>Feedback Friday!</h1>
        <p className='text-gray-600 mt-1'>
          Feedback Friday helps teams give each other feedback. Add everyone on your team and
          Feedback Friday will help you run a productive feedback session.
        </p>
      </header>

      <section className='mt-12'>
        <header>
          <h2 className='text-xl'>Who&apos;s on your team?</h2>
        </header>

        <form
          aria-label='Participating teammates form'
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            startFeedbackSession()
          }}
          className='mt-4'
        >
          <>
            <div className='grid grid-cols-1 gap-1'>
              {participatingTeammates.map((teammate, idx) => (
                <div key={teammate.id} className='w-3/4'>
                  <label className='block'>
                    <span className='text-gray-700'>Teammate name</span>
                    <input
                      value={teammate.name}
                      type='text'
                      name='teammate-name'
                      aria-label='Teammate name'
                      onChange={(e) => updateTeammateName(teammate, e.target.value)}
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                    />
                  </label>
                  <button
                    aria-label={`Remove teammate ${idx + 1}`}
                    onClick={(e: React.MouseEvent<HTMLElement>) => {
                      e.preventDefault()
                      removeParticipatingTeammate(teammate)
                    }}
                    className='float-right flex items-center px-2 py-1 mt-1 rounded-md text-sm text-gray-600 hover:bg-indigo-100 hover:text-indigo-800'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-3 w-3 mr-2'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                    </svg>
                    Remove teammate
                  </button>
                </div>
              ))}
            </div>

            <SecondaryButton
              text='Add another teammate'
              icon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4 mr-2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                  />
                </svg>
              }
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                e.preventDefault()
                addParticipatingTeammate()
              }}
              className='mt-5'
            />

            <input
              value='Start Feedback Session'
              type='submit'
              className='w-full mt-8 py-2 rounded-md bg-indigo-700 text-indigo-50 cursor-pointer shadow-sm hover:bg-indigo-800'
            />
          </>
        </form>
      </section>
    </div>
  )
}

export default Home
