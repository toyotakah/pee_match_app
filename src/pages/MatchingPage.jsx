import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Card from '../components/Card';

const MatchingPage = () => {
    const [searchParams] = useSearchParams();
    const mode = searchParams.get('mode') || 'emergency';
    const navigate = useNavigate();
    const [status, setStatus] = useState('searching'); // searching, found, complete

    useEffect(() => {
        // Simulate matching process
        const timer1 = setTimeout(() => {
            setStatus('found');
        }, 3000);

        return () => clearTimeout(timer1);
    }, []);

    const isEmergency = mode === 'emergency';
    const themeColor = isEmergency ? 'var(--color-urgent)' : 'var(--color-relaxed)';

    return (
        <div className="container flex-center" style={{ minHeight: '100vh', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ textAlign: 'center' }}
            >
                <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>
                    {status === 'searching' && 'Searching for a Match...'}
                    {status === 'found' && 'Match Found!'}
                </h2>
                <p style={{ color: 'var(--color-text-muted)' }}>
                    {status === 'searching' && 'Scanning nearby users...'}
                    {status === 'found' && 'Connecting you now...'}
                </p>
            </motion.div>

            <Card className="flex-center" style={{ width: '100%', maxWidth: '500px', minHeight: '300px', flexDirection: 'column', gap: 'var(--spacing-xl)', borderColor: themeColor }}>
                {status === 'searching' && (
                    <div style={{ position: 'relative', width: '150px', height: '150px' }}>
                        <motion.div
                            style={{
                                position: 'absolute', width: '100%', height: '100%', borderRadius: '50%',
                                border: `4px solid ${themeColor}`, opacity: 0.3
                            }}
                            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <motion.div
                            style={{
                                position: 'absolute', width: '100%', height: '100%', borderRadius: '50%',
                                border: `4px solid ${themeColor}`, opacity: 0.3
                            }}
                            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                        />
                        <div className="flex-center" style={{ width: '100%', height: '100%', fontSize: '3rem' }}>
                            {isEmergency ? '🚽' : '🤝'}
                        </div>
                    </div>
                )}

                {status === 'found' && (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex-center"
                        style={{ flexDirection: 'column', gap: 'var(--spacing-md)' }}
                    >
                        <div style={{
                            width: '100px', height: '100px', borderRadius: '50%', background: themeColor,
                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem'
                        }}>
                            ✅
                        </div>
                        <h3 style={{ fontSize: '1.5rem' }}>
                            {isEmergency ? 'Restroom Available!' : 'User in Need Found!'}
                        </h3>
                        <p style={{ color: 'var(--color-text-muted)', textAlign: 'center' }}>
                            {isEmergency ? 'Distance: 50m' : 'Distance: 50m'}
                        </p>
                        <Button variant={isEmergency ? 'urgent' : 'relaxed'} onClick={() => alert('Navigation started!')}>
                            {isEmergency ? 'Go Now' : 'Accept'}
                        </Button>
                    </motion.div>
                )}
            </Card>

            <Button variant="secondary" onClick={() => navigate('/')}>
                Cancel
            </Button>
        </div>
    );
};

export default MatchingPage;
