use anchor_lang::prelude::*;

#[account]
pub struct StudentProfile {
    pub authority: Pubkey,      // 32
    pub name: String,           // 4 + len
    pub college: String,        // 4 + len
    pub course: String,         // 4 + len
    pub year: u8,               // 1
    pub is_verified: bool,      // 1
    pub bump: u8,               // 1
}

impl StudentProfile {
    pub const MAX_SIZE: usize = 8 + 32 + (4 + 50) + (4 + 50) + (4 + 50) + 1 + 1 + 1; // Approx size
}
