class CredentialUtils {
  // Generates a username like "SilverFalcon42"
  static generateUsername() {
    const adjectives = ['Swift', 'Silver', 'Cosmic', 'Shadow', 'Neon', 'Golden'];
    const nouns = ['Falcon', 'Phoenix', 'Ranger', 'Knight', 'Seeker', 'Ghost'];

    const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomNumber = Math.floor(10 + Math.random() * 90); // 2-digit number

    return randomAdj + randomNoun + randomNumber;
  }

  // Generates a random 12-character password
  static generatePassword() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    
    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    
    return password;
  }
}

module.exports = {CredentialUtils}