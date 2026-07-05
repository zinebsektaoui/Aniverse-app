import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Heart, CheckCircle2, Star } from 'lucide-react'
import Footer from '../components/layouts/Footer';
import { getFav } from '../redux/thunks/favoriteThunk';
import { getStatus } from '../redux/thunks/statusThunk';
import { getNote } from '../redux/thunks/noteThunk';
import Spinner from '../components/layouts/Spinner';
import ErrorState from '../components/layouts/ErrorState';

function Dashboard() {
    const dispatch = useDispatch()
    const { favorites, loading, error } = useSelector((state) => state.favorite)
    const { completedCount } = useSelector((state) => state.status)
    const { noteAndReview } = useSelector((state) => state.notes)

    const avg =noteAndReview.length > 0
        ? (noteAndReview.reduce((sum, item) => sum + item.note, 0) / noteAndReview.length).toFixed(1)
        : 0
        
    useEffect(() => {
        dispatch(getFav())
        dispatch(getStatus())
        dispatch(getNote())
    }, [])
    if (loading) return <Spinner />;
    if (error) return <ErrorState message={error} />;
        

    return (
        <div className="min-h-screen bg-slate-950 px-6 py-10 md:px-10">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Personal Stats & Dashboard
                </h1>
                <p className="text-slate-400 mb-8">
                    An overview of your personal viewing statistics, rating distributions, library status counts, and historical logs
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold tracking-wider text-slate-400">
                    FAVORITES
                    </span>
                    <Heart className="w-5 h-5 text-rose-500" />
                </div>

                <div className="text-4xl font-bold text-white mb-1">
                    {favorites.length}
                </div>

                <p className="text-sm text-rose-400">
                    Saved to bookmarks
                </p>
                </div>

                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold tracking-wider text-slate-400">
                    COMPLETED
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>

                <div className="text-4xl font-bold text-white mb-1">
                    {completedCount}
                </div>

                <p className="text-sm text-emerald-400">
                    Finished series
                </p>
                </div>

                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold tracking-wider text-slate-400">
                    AVERAGE RATING
                    </span>
                    <Star className="w-5 h-5 text-indigo-400" />
                </div>

                <div className="text-4xl font-bold text-white mb-1">
                    {avg}
                </div>

                <p className="text-sm text-slate-400">
                    Across {noteAndReview.length} reviews
                </p>
                </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Dashboard