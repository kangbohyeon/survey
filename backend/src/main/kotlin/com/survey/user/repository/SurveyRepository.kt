package com.survey.user.repository

import com.survey.user.domain.Survey
import org.springframework.data.jpa.repository.JpaRepository

interface SurveyRepository : JpaRepository<Survey, Int> {
}