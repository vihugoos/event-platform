import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import { Link } from 'react-router-dom';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const isLessonAvailable = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' 'MMMM' • 'k'h'mm")

    return (
        <>
            {isLessonAvailable ? (
                <Link to={`/event/lesson/${props.slug}`} className="group">
                    <span className="text-gray-300"> 
                        {availableDateFormatted}
                    </span>

                    <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
                        <header className="flex items-center justify-between">
                            <span className="text-sm text-blue-500 font-medium flex items-center gap-2"> 
                                <CheckCircle size={20} />
                                Released
                            </span>

                            {props.type === 'live' 
                            ? 
                            <span className="text-xs rounded py-[0.125rem] px-2 text-white font-bold bg-red-600"> 
                                LIVE
                            </span>
                            : 
                            <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold"> 
                                PRACTICAL CLASS 
                            </span>
                            }
                        </header>

                        <strong className="text-gray-200 mt-5 block"> 
                            {props.title}
                        </strong>
                    </div>
                </Link>
            ): (
                <Link to={`/event/lesson/${props.slug}`} className="pointer-events-none group">
                    <span className="text-gray-300 hover:cursor-not-allowed"> 
                        {availableDateFormatted}
                    </span>

                    <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-red-400 group-hover:cursor-not-allowed">
                        <header className="flex items-center justify-between">
                            <span className="text-sm text-orange-500 font-medium flex items-center gap-2"> 
                                <Lock size={20} />
                                Coming soon 
                            </span>

                            {props.type === 'live' 
                            ? 
                            <span className="text-xs rounded py-[0.125rem] px-2 text-white font-bold bg-red-600"> 
                                LIVE
                            </span>
                            : 
                            <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold"> 
                                PRACTICAL CLASS 
                            </span>
                            }
                        </header>

                        <strong className="text-gray-200 mt-5 block"> 
                            {props.title}
                        </strong>
                    </div>
                </Link>
            )} 
        </>
    )
}
