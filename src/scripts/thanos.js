import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parseContacts = JSON.parse(data);
    const selectedContacts = parseContacts.filter(() => Math.random() >= 0.5);
    await fs.writeFile(PATH_DB, JSON.stringify(selectedContacts, null, 2));
  } catch (error) {
    console.log('Error:', error);
  }
};

await thanos();
