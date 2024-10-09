import React from 'react';
import './UserDashboard.css';
import EditIcon from '@mui/icons-material/Edit'; // Import the MUI Edit icon

const UserDashboard: React.FC = () => {
    // Sample links data
    const links = [
        { id: 1, title: 'Example Link 1', url: 'https://example1.com' },
        { id: 2, title: 'Example Link 2', url: 'https://example2.com' },
        { id: 3, title: 'Example Link 3', url: 'https://example3.com' },
        { id: 4, title: 'Example Link 4', url: 'https://example4.com' },
        { id: 5, title: 'Example Link 5', url: 'https://example5.com' },
    ];

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <button className="go-back-button">Go Back</button>
                <h1>Links</h1>
                <button className="create-link-button">
                    <EditIcon style={{ marginRight: '8px' }} /> {/* Add the icon with some spacing */}
                    Create Link
                </button>
            </div>
            <div className="links-list">
                {links.map(link => (
                    <div key={link.id} className="link-card">
                        <div className="link-info">
                            <h2>{link.title}</h2>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserDashboard;

