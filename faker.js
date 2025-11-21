// Run with:
//   npm install @faker-js/faker
//   node generate_data.js

import { faker } from '@faker-js/faker';
import fs from 'fs';

const NUM_ROWS = 500;
const NUM_USERS = 500; // assuming 500 users exist
const NUM_POSTS = 500;

// Escape single quotes for SQL safety
const esc = (str) => str.replace(/'/g, "''");

// Helper: random timestamp between 1–10 days ago
const randomPastDate = () => {
    const daysAgo = faker.number.int({ min: 1, max: 10 });
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toISOString().slice(0, 19).replace('T', ' '); // format 'YYYY-MM-DD HH:MM:SS'
};

let output = "";

// --- Subscriptions ---
output += "INSERT INTO subscriptions (subscriber_id, subscribee_id, created_at) VALUES\n";
for (let i = 1; i <= NUM_ROWS; i++) {
    let subscriber = faker.number.int({ min: 1, max: NUM_USERS });
    let subscribee;
    do {
        subscribee = faker.number.int({ min: 1, max: NUM_USERS });
    } while (subscribee === subscriber); // avoid self-subscribing

    const line = `(${subscriber}, ${subscribee}, CURRENT_TIMESTAMP)`;
    output += i < NUM_ROWS ? line + ",\n" : line + ";\n\n";
}

// --- Posts ---
output += "INSERT INTO posts (user_id, title, body, created_at) VALUES\n";
for (let i = 1; i <= NUM_ROWS; i++) {
    const userId = faker.number.int({ min: 1, max: NUM_USERS });
    const title = faker.lorem.sentence({ min: 3, max: 8 });
    const body = faker.lorem.paragraph({ min: 2, max: 5 });
    const createdAt = randomPastDate();

    const line = `(${userId}, '${esc(title)}', '${esc(body)}', '${createdAt}')`;
    output += i < NUM_ROWS ? line + ",\n" : line + ";\n\n";
}

// --- Comments ---
output += "INSERT INTO comments (post_id, user_id, body, created_at) VALUES\n";
for (let i = 1; i <= NUM_ROWS; i++) {
    const postId = faker.number.int({ min: 1, max: NUM_POSTS });
    const userId = faker.number.int({ min: 1, max: NUM_USERS });
    const body = faker.lorem.sentence({ min: 6, max: 15 });

    const line = `(${postId}, ${userId}, '${esc(body)}', CURRENT_TIMESTAMP)`;
    output += i < NUM_ROWS ? line + ",\n" : line + ";\n\n";
}

// --- Likes ---
output += "INSERT INTO likes (user_id, post_id) VALUES\n";
for (let i = 1; i <= 2000; i++) {
    const userId = faker.number.int({ min: 1, max: NUM_USERS });
    const postId = faker.number.int({ min: 1, max: NUM_POSTS });
    const line = `(${userId}, ${postId})`;
    output += i < 2000 ? line + ",\n" : line + ";\n";
}

fs.writeFileSync('insert_data.sql', output, 'utf8');
console.log("✅ File 'insert_data.sql' with 500 rows per table has been created!");
