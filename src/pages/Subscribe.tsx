import { useState, FormEvent} from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../components/Logo'
import { useCreateSubscriberMutation } from '../graphql/generated'

export function Subscribe() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [ createSubscriber, { loading } ] = useCreateSubscriberMutation()

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault()

        await createSubscriber({
            variables: {
                name,
                email
            }
        })

        navigate('/event')
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 max-auto">
                <div className="max-w-[640px]"> 
                    <Logo />

                    <h1 className="mt-8 text-[2.5rem] leading-light"> 
                        Build a <strong className="text-blue-500"> complete application</strong>, from scratch, with <strong className="text-blue-500"> React. </strong> 
                    </h1>

                    <p className="mt-4 text-gray-200 leading-relaxed">
                        In just one week you will build a complete application using the most demanded technologies on the market. To access the best opportunities.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block"> 
                        Sign up for free
                    </strong>

                    <form  onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input 
                            type="text" 
                            placeholder="Your complete name" 
                            className="bg-gray-900 rounded px-5 h-14" 
                            onChange={event => setName(event.target.value)}
                        />

                        <input 
                            type="email" 
                            placeholder="Your address email" 
                            className="bg-gray-900 rounded px-5 h-14" 
                            onChange={event => setEmail(event.target.value)}
                        /> 

                        <button 
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            Secure my spot
                        </button>
                    </form>
                </div>
            </div>

            <img src="../src/assets/react-background.png" className="absolute" />
            <img src="../src/assets/code-mockup.png" className="mt-10" />
        </div>
    )
}
