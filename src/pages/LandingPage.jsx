import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Card from '../components/Card';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="container flex-center" style={{ minHeight: '100vh', flexDirection: 'column', gap: 'var(--spacing-2xl)' }}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center' }}
            >
                <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: 'var(--spacing-sm)' }}>
                    Un-Ko Matcher
                </h1>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>
                    Premium Relief, Instantly.
                </p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)', width: '100%' }}>
                <Card className="flex-center" style={{ flexDirection: 'column', gap: 'var(--spacing-lg)', borderColor: 'var(--color-urgent)' }}>
                    <div style={{
                        width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-urgent)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem',
                        animation: 'pulse-urgent 2s infinite'
                    }}>
                        🚨
                    </div>
                    <h2 style={{ fontSize: '1.5rem' }}>I'm Emergency</h2>
                    <p style={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>
                        Immediate relief needed. Find a spot now.
                    </p>
                    <Button variant="urgent" onClick={() => navigate('/matching?mode=emergency')}>
                        Find Restroom
                    </Button>
                </Card>

                <Card className="flex-center" style={{ flexDirection: 'column', gap: 'var(--spacing-lg)', borderColor: 'var(--color-relaxed)' }}>
                    <div style={{
                        width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-relaxed)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem',
                        animation: 'pulse-relaxed 3s infinite'
                    }}>
                        😌
                    </div>
                    <h2 style={{ fontSize: '1.5rem' }}>I'm Relaxed</h2>
                    <p style={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>
                        Willing to give up a spot or offer help.
                    </p>
                    <Button variant="relaxed" onClick={() => navigate('/matching?mode=relaxed')}>
                        Offer Spot
                    </Button>
                </Card>
            </div>
        </div>
    );
};

export default LandingPage;
