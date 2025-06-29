import { Client, GatewayIntentBits, ChannelType } from 'discord.js';
import { config } from 'dotenv';

// Load environment variables
config();

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping
    ]
});

// Bot ready event
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('Bot is ready to receive direct messages!');
    console.log('Send a DM to the bot to test it.');
    console.log(`ChannelType.DM value: ${ChannelType.DM}`);
});

// Direct message handler
client.on('messageCreate', (message) => {
    // Debug: log all messages to understand what's happening
    console.log('=== MESSAGE RECEIVED ===');
    console.log(`Channel Type: ${message.channel.type}`);
    console.log(`Channel Type (numeric): ${message.channel.type}`);
    console.log(`Expected DM Type: ${ChannelType.DM}`);
    console.log(`Is DM: ${message.channel.type === ChannelType.DM}`);
    console.log(`Channel ID: ${message.channel.id}`);
    console.log(`Guild ID: ${message.guild?.id || 'No Guild (DM)'}`);
    console.log(`Author: ${message.author.tag}`);
    console.log(`Content: ${message.content}`);
    console.log('========================');

    // Check if the message is a direct message (DM)
    if (message.channel.type === ChannelType.DM) {
        console.log('✅ DIRECT MESSAGE DETECTED!');
        console.log('=== DIRECT MESSAGE RECEIVED ===');
        console.log(`From: ${message.author.tag} (${message.author.id})`);
        console.log(`Content: ${message.content}`);
        console.log(`Timestamp: ${message.createdAt.toISOString()}`);
        console.log('================================');
        
        // You can add your custom logic here to process the DM
        // For now, we'll just acknowledge the message
        message.reply('I received your direct message! This is a test response.')
            .catch(error => {
                console.error('Error sending reply:', error);
            });
    } else {
        console.log('❌ Not a direct message');
    }
});

// Error handling
client.on('error', error => {
    console.error('Discord client error:', error);
});

// Login to Discord
const token = process.env.DISCORD_TOKEN;

if (!token) {
    console.error('DISCORD_TOKEN is not set in your .env file!');
    process.exit(1);
}

client.login(token).catch(error => {
    console.error('Failed to login:', error);
    process.exit(1);
}); 