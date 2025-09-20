// secureCryptoUtils.js

/**
 * Secure Crypto Utilities using Web Crypto API
 * - AES-GCM Encryption/Decryption
 * - Auto-expiry support
 * - Key derivation using PBKDF2
 * - LocalStorage/Context safe
 * - Removes need for external libraries like crypto-js
 */

const encoder = new TextEncoder();
const decoder = new TextDecoder();

const STORAGE_KEY = 'secure_data';
const STORAGE_KEY_META = 'secure_data_meta';

// Expiry duration in ms (e.g. 30 mins)
const DEFAULT_EXPIRY = 30 * 60 * 1000;

// Derive key using PBKDF2 from passphrase
export async function deriveKeyFromPassphrase(passphrase, salt = window.crypto.getRandomValues(new Uint8Array(16))) {
    const baseKey = await window.crypto.subtle.importKey(
        'raw', encoder.encode(passphrase), { name: 'PBKDF2' }, false, ['deriveKey']
    );

    const derivedKey = await window.crypto.subtle.deriveKey(
        {
            name: 'PBKDF2',
            salt,
            iterations: 100000,
            hash: 'SHA-256'
        },
        baseKey,
        { name: 'AES-GCM', length: 256 },
        true,
        ['encrypt', 'decrypt']
    );

    return { key: derivedKey, salt };
}

// Encrypt a string with AES-GCM
export async function encrypt(text, key) {
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const encoded = encoder.encode(text);
    const encrypted = await window.crypto.subtle.encrypt(
        { name: 'AES-GCM', iv },
        key,
        encoded
    );

    return {
        encryptedData: btoa(String.fromCharCode(...new Uint8Array(encrypted))),
        iv: Array.from(iv)
    };
}

// Decrypt the data
export async function decrypt(encryptedBase64, ivArray, key) {
    const iv = new Uint8Array(ivArray);
    const encryptedBytes = Uint8Array.from(atob(encryptedBase64), c => c.charCodeAt(0));
    const decrypted = await window.crypto.subtle.decrypt(
        { name: 'AES-GCM', iv },
        key,
        encryptedBytes
    );
    return decoder.decode(decrypted);
}

// Store securely in localStorage with expiry
export function storeEncryptedItem({ encryptedData, iv }, salt, expiryMs = DEFAULT_EXPIRY) {
    const now = Date.now();
    const meta = {
        iv,
        salt: Array.from(salt),
        timestamp: now,
        expiry: now + expiryMs
    };
    localStorage.setItem(STORAGE_KEY, encryptedData);
    localStorage.setItem(STORAGE_KEY_META, JSON.stringify(meta));
}

// Load and decrypt from localStorage
export async function loadDecryptedItem(passphrase) {
    const encryptedData = localStorage.getItem(STORAGE_KEY);
    const metaRaw = localStorage.getItem(STORAGE_KEY_META);

    if (!encryptedData || !metaRaw) return null;

    const meta = JSON.parse(metaRaw);

    // Expiry check
    if (Date.now() > meta.expiry) {
        clearStoredItem();
        return null;
    }

    const salt = new Uint8Array(meta.salt);
    const { key } = await deriveKeyFromPassphrase(passphrase, salt);

    try {
        const decrypted = await decrypt(encryptedData, meta.iv, key);
        return decrypted;
    } catch (err) {
        console.error('Decryption failed', err);
        return null;
    }
}

export function clearStoredItem() {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STORAGE_KEY_META);
}

// Auto-expiry management example
export function isDataExpired() {
    const metaRaw = localStorage.getItem(STORAGE_KEY_META);
    if (!metaRaw) return true;
    const meta = JSON.parse(metaRaw);
    return Date.now() > meta.expiry;
}

/**
 * Example usage:
 * 
 * import {
 *   deriveKeyFromPassphrase,
 *   encrypt,
 *   decrypt,
 *   storeEncryptedItem,
 *   loadDecryptedItem,
 *   clearStoredItem
 * } from './secureCryptoUtils';
 * 
 * const passphrase = 'user-secret-password';
 * const userData = JSON.stringify({ name: 'Khan', email: 'test@example.com' });
 * 
 * const { key, salt } = await deriveKeyFromPassphrase(passphrase);
 * const encryptedObj = await encrypt(userData, key);
 * storeEncryptedItem(encryptedObj, salt);
 * 
 * const decryptedText = await loadDecryptedItem(passphrase);
 * console.log(JSON.parse(decryptedText));
 */



//  Step 1: Key Generation
//  async function generateKey() {
//   return await crypto.subtle.generateKey(
//     { name: 'AES-GCM', length: 256 }, // Algorithm + key size
//     true, // extractable
//     ['encrypt', 'decrypt'] // Usage
//   );
// }
// 🧠 What's happening?
// We're generating an AES key (256-bit).
// This is a symmetric key (same key used for encryption/decryption).
// It can be extracted (stored if needed).
// You'll store it temporarily in memory or export it and store securely.



// 🧷 Step 2: Export Key to Store
// async function storeKey(key, keyName) {
//   const exported = await crypto.subtle.exportKey('raw', key);
//   const base64Key = btoa(String.fromCharCode(...new Uint8Array(exported)));
//   localStorage.setItem(keyName, base64Key);
// }
// ✅ Purpose
// Converts the key into a storable format (Base64 string).
// Saves it in localStorage (or sessionStorage if session-only).
// ⚠️ Make sure you're storing this only if you're okay with it being reused.



// 🔑 Step 3: Load Stored Key
// async function getStoredKey(keyName) {
//   const base64Key = localStorage.getItem(keyName);
//   if (!base64Key) return null;

//   const raw = Uint8Array.from(atob(base64Key), c => c.charCodeAt(0));
//   return await crypto.subtle.importKey(
//     'raw',
//     raw,
//     { name: 'AES-GCM' },
//     true,
//     ['encrypt', 'decrypt']
//   );
// }
// ✅ Purpose
// Converts stored Base64 string back into usable CryptoKey.
// Now you can use this key to decrypt data.


// 🔐 Step 4: Encrypt Data
// async function encrypt(text, key) {
//   const enc = new TextEncoder();
//   const iv = crypto.getRandomValues(new Uint8Array(12)); // Random IV (nonce)
//   const encrypted = await crypto.subtle.encrypt(
//     { name: 'AES-GCM', iv },
//     key,
//     enc.encode(text)
//   );
//   return { encrypted, iv };
// }
// 🧠 What's going on?
// text: plaintext (string) you want to secure.
// TextEncoder: converts to binary data.
// iv: Initialization Vector (random per encryption, must be saved for decryption).
// encrypted: Encrypted ArrayBuffer.
// 🔁 You'll need to store both encrypted and iv for decryption.

// 🔓 Step 5: Decrypt Data
// async function decrypt(encryptedData, iv, key) {
//   const dec = new TextDecoder();
//   const decrypted = await crypto.subtle.decrypt(
//     { name: 'AES-GCM', iv: new Uint8Array(iv) },
//     key,
//     encryptedData
//   );
//   return dec.decode(decrypted);
// }
// ✅ Explanation
// Takes the encryptedData, IV and key.
// Uses TextDecoder to convert binary back to string.
// Returns decrypted text (original value).


// ⏳ Step 6: Auto Expiry Handling
// function setExpiry(minutes = 30) {
//   const expiresAt = Date.now() + minutes * 60 * 1000;
//   localStorage.setItem('sessionExpiry', expiresAt);
// }

// function isSessionValid() {
//   const expiry = localStorage.getItem('sessionExpiry');
//   if (!expiry) return false;
//   return Date.now() < parseInt(expiry);
// }
// ✅ What’s this?
// setExpiry() stores an expiry timestamp.
// isSessionValid() checks if current time is still within that window.
// You can use this to auto-logout users or auto-clear data.



// | Function Name      | Purpose                                                 |
// | ------------------ | ------------------------------------------------------- |
// | `generateKey()`    | Create a new AES key                                    |
// | `storeKey()`       | Save key in Base64 format (localStorage/sessionStorage) |
// | `getStoredKey()`   | Load key back from storage                              |
// | `encrypt()`        | Encrypt data using AES-GCM                              |
// | `decrypt()`        | Decrypt encrypted data                                  |
// | `setExpiry()`      | Save expiry timestamp                                   |
// | `isSessionValid()` | Validate if session hasn't expired                      |


// | Item               | Best Place                                                           |
// | ------------------ | -------------------------------------------------------------------- |
// | **Key**            | Memory (`context` or `useRef`) OR localStorage if needed temporarily |
// | **Encrypted Data** | `localStorage` or `sessionStorage`                                   |
// | **Expiry time**    | `localStorage` or `sessionStorage`                                   |
// | **IV**             | Save alongside encrypted data (not sensitive, must match encryption) |


// 📦 Do You Still Need crypto-js?
// No — this native solution is more secure and efficient:
// No external dependencies
// Uses browser-native cryptography
// AES-GCM mode ensures confidentiality and integrity

