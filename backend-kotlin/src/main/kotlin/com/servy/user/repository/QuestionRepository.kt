package com.servy.user.repository

import com.servy.user.domain.Question
import org.springframework.data.jpa.repository.JpaRepository

interface QuestionRepository : JpaRepository<Question, Int> {
}