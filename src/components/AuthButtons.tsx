import React, { useEffect, useState } from 'react';
import { supabase, signInWithGoogle, signOut } from '../lib/supabase';
import type { User } from '@supabase/supabase-js';

export default function AuthButtons() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        // Get initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
            setLoading(false);
        });

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user ?? null);
            setLoading(false);
        });

        return () => subscription.unsubscribe();
    }, []);

    const handleSignIn = async () => {
        setLoading(true);
        try {
            await signInWithGoogle();
        } catch (error) {
            console.error('Error signing in:', error);
            setLoading(false);
        }
    };

    const handleSignOut = async () => {
        setLoading(true);
        try {
            await signOut();
            setMenuOpen(false);
        } catch (error) {
            console.error('Error signing out:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="w-10 h-10 rounded-xl bg-midnight-800 border border-white/10 flex items-center justify-center animate-pulse">
                <div className="w-5 h-5 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (user) {
        return (
            <div className="relative">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-midnight-800 border border-white/10 hover:border-accent/30 transition-all"
                >
                    {user.user_metadata?.avatar_url ? (
                        <img
                            src={user.user_metadata.avatar_url}
                            alt={user.user_metadata?.full_name || 'User'}
                            className="w-8 h-8 rounded-lg object-cover"
                        />
                    ) : (
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                            <span className="text-white font-bold text-sm">
                                {(user.user_metadata?.full_name || user.email || 'U')[0].toUpperCase()}
                            </span>
                        </div>
                    )}
                    <span className="text-sm text-white hidden sm:block max-w-[100px] truncate">
                        {user.user_metadata?.full_name || user.email?.split('@')[0]}
                    </span>
                    <svg
                        className={`w-4 h-4 text-zinc-400 transition-transform ${menuOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {/* Dropdown Menu */}
                {menuOpen && (
                    <>
                        <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
                        <div className="absolute right-0 mt-2 w-56 py-2 bg-midnight-800 border border-white/10 rounded-xl shadow-xl z-50">
                            <div className="px-4 py-3 border-b border-white/10">
                                <p className="text-sm font-medium text-white truncate">
                                    {user.user_metadata?.full_name || 'User'}
                                </p>
                                <p className="text-xs text-zinc-400 truncate">{user.email}</p>
                            </div>
                            <button
                                onClick={handleSignOut}
                                className="w-full px-4 py-2 text-left text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-2"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                    />
                                </svg>
                                Sign out
                            </button>
                        </div>
                    </>
                )}
            </div>
        );
    }

    return (
        <a
            href="/login"
            className="px-5 py-2.5 text-sm font-medium text-white bg-midnight-800 border border-white/10 rounded-xl hover:border-accent/30 hover:bg-midnight-700 transition-all flex items-center gap-2"
        >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
            </svg>
            Sign In
        </a>
    );
}
