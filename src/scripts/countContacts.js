import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    const parseContacts = JSON.parse(contacts);
    return parseContacts.length;
  } catch (error) {
    console.log('Error:', error);
  }
};

console.log(await countContacts());
