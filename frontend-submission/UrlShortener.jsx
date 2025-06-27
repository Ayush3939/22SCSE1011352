import { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material'; 
import { log } from './Logging';

export default function UrlShortener() {
  const [urls, setUrls] = useState([]);
  const [input, setInput] = useState({ longUrl: '', validity: 30, shortCode: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.longUrl.startsWith('http')) {
      log('ERROR', 'Invalid URL');
      alert('URL must start with http:// or https://');
      return;
    }

    const shortCode = input.shortCode || Math.random().toString(36).slice(2, 8);
    const expiry = new Date(Date.now() + input.validity * 60000).toLocaleString();

    setUrls([...urls, { ...input, shortCode, expiry }]);
    log('SHORTEN', `Shortened ${input.longUrl} to ${shortCode}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Paste Long URL"
            value={input.longUrl}
            onChange={(e) => setInput({ ...input, longUrl: e.target.value })}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Validity (minutes)"
            type="number"
            value={input.validity}
            onChange={(e) => setInput({ ...input, validity: e.target.value || 30 })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Custom Shortcode (optional)"
            value={input.shortCode}
            onChange={(e) => setInput({ ...input, shortCode: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Shorten URL
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
