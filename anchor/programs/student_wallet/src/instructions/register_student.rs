use anchor_lang::prelude::*;
use crate::state::*;
use crate::constants::*;

#[derive(Accounts)]
#[instruction(name: String, college: String, course: String, year: u8)]
pub struct RegisterStudent<'info> {
    #[account(
        init,
        payer = authority,
        space = StudentProfile::MAX_SIZE,
        seeds = [STUDENT_TAG, authority.key().as_ref()],
        bump
    )]
    pub student_profile: Account<'info, StudentProfile>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

pub fn register_student(
    ctx: Context<RegisterStudent>,
    name: String,
    college: String,
    course: String,
    year: u8,
) -> Result<()> {
    let student_profile = &mut ctx.accounts.student_profile;
    student_profile.authority = ctx.accounts.authority.key();
    student_profile.name = name;
    student_profile.college = college;
    student_profile.course = course;
    student_profile.year = year;
    student_profile.is_verified = false; // Default to false, maybe verify later via oracle or admin
    student_profile.bump = ctx.bumps.student_profile;

    msg!("Student registered: {}", student_profile.name);
    Ok(())
}
