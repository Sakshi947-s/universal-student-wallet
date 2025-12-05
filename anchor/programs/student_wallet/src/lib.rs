use anchor_lang::prelude::*;

pub mod constants;
pub mod state;
pub mod instructions;

use instructions::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod student_wallet {
    use super::*;

    pub fn register_student(
        ctx: Context<RegisterStudent>,
        name: String,
        college: String,
        course: String,
        year: u8,
    ) -> Result<()> {
        instructions::register_student::register_student(ctx, name, college, course, year)
    }

    pub fn transfer_funds(ctx: Context<TransferFunds>, amount: u64) -> Result<()> {
        instructions::transfer_funds::transfer_funds(ctx, amount)
    }

    pub fn mint_student_nft(
        ctx: Context<MintStudentNFT>,
        uri: String,
        name: String,
        symbol: String,
    ) -> Result<()> {
        instructions::mint_nft::mint_student_nft(ctx, uri, name, symbol)
    }
}
