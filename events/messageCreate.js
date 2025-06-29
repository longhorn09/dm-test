import { Events, ChannelType } from 'discord.js';

export default {
    name: Events.MessageCreate,
    once: false,
    execute(message) {
        // Ignore messages from bots (including the bot itself) to prevent recursive responses
        if (message.author.bot) {
            console.log('🤖 Ignoring message from bot:', message.author.tag);
            return;
        }

        // Debug: log all messages to understand what's happening
        console.log('=== MESSAGE RECEIVED ===');
        console.log(`Channel Type: ${message.channel.type}`);
        console.log(`Channel Type (numeric): ${message.channel.type}`);
        console.log(`Expected DM Type: ${ChannelType.DM}`);
        console.log(`Is DM: ${message.channel.type === ChannelType.DM}`);
        console.log(`Channel ID: ${message.channel.id}`);
        console.log(`Guild ID: ${message.guild?.id || 'No Guild (DM)'}`);
        console.log(`Author: ${message.author.tag} (${message.author.id})`);
        console.log(`Is Bot: ${message.author.bot}`);
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
    },
}; 