package com.survey.user.repository

import com.survey.user.domain.Question
import org.springframework.data.jpa.repository.JpaRepository

interface QuestionRepository : JpaRepository<Question, Int> {
}